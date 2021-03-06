import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text } from '@gametoken/uikit'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceCakeBusd, useGetApiPrices, usePriceBnbBusd } from 'state/hooks'
import usePersistState from 'hooks/usePersistState'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { Farm } from 'state/types'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { getFarmApy } from 'utils/apy'
import { orderBy } from 'lodash'
import tokens from 'config/constants/tokens'
import { useGmePerBlock } from 'hooks/useTokenBalance'
import { getAddress } from 'utils/addressHelpers'
import PageHeader from 'components/PageHeader' 
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Table from './components/FarmTable/FarmTable'
import FarmTabButtons from './components/FarmTabButtons'
import SearchInput from './components/SearchInput'
import { RowProps } from './components/FarmTable/Row'
import ToggleView from './components/ToggleView/ToggleView'
import Divider from './components/Divider'
import { DesktopColumnSchema, ViewMode } from './components/types'
import Select, { OptionProps } from './components/Select/Select'


const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const TopImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
export interface FarmsProps {
  tokenMode?: boolean
}

const NUMBER_OF_FARMS_VISIBLE = 12

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = usePersistState(ViewMode.TABLE, 'pancake_farm_view')
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')
  const prices = useGetApiPrices()
  const gmePerBlock = useGmePerBlock();
  const { tokenMode } = farmsProps

  
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)
  const isActive = !pathname.includes('history')

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.pid !== 0 && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )



  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken) {
          return farm
        }

        let quoteTokenPriceUsd = prices && prices[getAddress(farm.quoteToken.address).toLowerCase()] ? prices[getAddress(farm.quoteToken.address).toLowerCase()] : 1
        if(farm.quoteToken.symbol === tokens.gme.symbol) quoteTokenPriceUsd = cakePrice.toNumber();
        if(farm.quoteToken.symbol === tokens.wbnb.symbol) quoteTokenPriceUsd = bnbPrice.toNumber();
        let tokenPriceUsd = prices && prices[getAddress(farm.token.address).toLowerCase()] ? prices[getAddress(farm.token.address).toLowerCase()] : 1
        if(farm.token.symbol === tokens.gme.symbol) tokenPriceUsd = cakePrice.toNumber();
        if(farm.token.symbol === tokens.wbnb.symbol) tokenPriceUsd = bnbPrice.toNumber()

        const totalLiquidity = farm.isTokenOnly ? new BigNumber(farm.tokenAmount).times(tokenPriceUsd) : new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
        const apy = isActive ? getFarmApy(farm.poolWeight, cakePrice, totalLiquidity, new BigNumber(getBalanceNumber(gmePerBlock, 18))) : 0
        console.log(farm, totalLiquidity.toNumber(), apy)

        return { ...farm, apy, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = query.toLowerCase()
        farmsToDisplayWithAPY = farmsToDisplayWithAPY.filter((farm: FarmWithStakedValue) => {
          return farm.lpSymbol.toLowerCase().includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPY
    },
    [cakePrice, bnbPrice, prices, query, isActive, gmePerBlock],
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)

  const farmsStakedMemoized = useMemo(() => {

  let farmsStaked = []

  const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
    switch (sortOption) {
      case 'apr':
        return orderBy(farms, (farm: FarmWithStakedValue) => farm.apy, 'desc')
      case 'multiplier':
        return orderBy(
          farms,
          (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
          'desc',
        )
      case 'earned':
        return orderBy(
          farms,
          (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
          'desc',
        )
      case 'liquidity':
        return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')

      
      default:
        return farms
    }
  }

  if (isActive) {
    farmsStaked = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
  } else {
    farmsStaked = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
  }

  return sortFarms(farmsStaked).slice(0, numberOfFarmsVisible)
  }, [
    sortOption,
    activeFarms,
    farmsList,
    inactiveFarms,
    
    isActive,
    
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    numberOfFarmsVisible,
  ])

  useEffect(() => {
    const showMoreFarms = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfFarmsVisible((farmsCurrentlyVisible) => farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMoreFarms, {
        rootMargin: '0px',
        threshold: 1,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [farmsStakedMemoized, observerIsSet])
  

  const rowData = farmsStakedMemoized.map((farm) => {
    const { token, quoteToken } = farm
    const tokenAddress = token.address
    const quoteTokenAddress = quoteToken.address
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('GAMETOKEN', '')

    const row: RowProps = {
      apr: {
        value: farm.apy && farm.apy.toLocaleString('en-US', { maximumFractionDigits: 2 }),
        multiplier: farm.multiplier,
        lpLabel,
        tokenAddress,
        quoteTokenAddress,
        cakePrice,
        originalValue: farm.apy,
      },
      farm: {
        image: farm.lpSymbol.split(' ')[0].toLocaleLowerCase(),
        label: lpLabel,
        pid: farm.pid,
      },
      earned: {
        earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
        pid: farm.pid,
      },

      liquidity: {
        liquidity: farm.liquidity,
      },
      deposit: {
        deposit: farm.depositFee,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
     
      details: farm,
    }

    return row
  })

  const renderContent = (): JSX.Element => {
   
    if (viewMode === ViewMode.TABLE && rowData.length) {
      const columnSchema = DesktopColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.id - a.id
            case 'apr':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'earned':
              return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      }))

      return <Table data={rowData} columns={columns} />
    }
   
    return (
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {farmsStakedMemoized.map((farm) => (
              <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed={false} />
            ))}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsStakedMemoized.map((farm) => (
              <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed />
            ))}
          </Route>
        </FlexLayout>
      </div>
    )
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  return (
   
     <>
      <PageHeader>
      
    <Heading size="xl" color="text" style={{ textAlign: 'center', marginBottom: "10px" }}>
   
      {!tokenMode ? TranslateString(999, 'Stake Liquidity Pool (LP) tokens to earn.') :
                      TranslateString(999, 'Stake tokens to earn GME.')}
                      
      </Heading> 
      <TopImage src="/images/gametoken.png" alt="GameTokenFinance" width={429} height={300} />  
      </PageHeader>
      <Page>   
    
      <ControlContainer>
        <ViewControls>
          <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />
          <ToggleWrapper>
            <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
            <Text> {TranslateString(1116, 'Staked only')}</Text>
          </ToggleWrapper>
          <FarmTabButtons />
        </ViewControls>
        <FilterContainer>
          <LabelWrapper>
            <Text textTransform="uppercase">{TranslateString(1116, 'Sort By')}</Text>
            <Select
              options={[
                {
                  label: 'Hot',
                  value: 'hot',
                },
                {
                  label: 'APR',
                  value: 'apr',
                },
                {
                  label: 'Multiplier',
                  value: 'multiplier',
                },
                {
                  label: 'Earned',
                  value: 'earned',
                },
                {
                  label: 'Liquidity',
                  value: 'liquidity',
                },
              
              ]}
              onChange={handleSortOptionChange}
            />
          </LabelWrapper>
          <LabelWrapper style={{ marginLeft: 16 }}>
              <Text textTransform="uppercase">{TranslateString(1116, 'Search')}</Text>
              <SearchInput onChange={handleChangeQuery} />
            </LabelWrapper>
        </FilterContainer>
      </ControlContainer>
      {renderContent()}
      <div ref={loadMoreRef} />
      <StyledImage src="/images/gametoken.png" alt="GameTokenFinance" width={286} height={200} />
    </Page>
  </>
)
}

export default Farms
