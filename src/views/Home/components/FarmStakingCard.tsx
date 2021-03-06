import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@gametoken/uikit'
import { harvest } from 'utils/callHelpers'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/controller-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvest(masterChefContract, farmWithBalance.pid, account)
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
    setPendingTx(false)
  }, [account, balancesWithValue, masterChefContract])

  return (
    <StyledFarmStakingCard>
    <CardBody>
      <Heading size="xl" mb="24px">
        {TranslateString(542, 'Farms & Staking')}
      </Heading>
      <CardImage src="/images/controller.png" alt="cake logo" width={64} height={64} />
      <Block>
        <Label>{TranslateString(544, 'GME to Harvest')}:</Label>
        <CakeHarvestBalance />
      </Block>
      <Block>
        <Label>{TranslateString(546, 'GME in Wallet')}:</Label>
        <CakeWalletBalance />
      </Block>
      <Actions>
        {account ? (
          <Button
            id="harvest-all"
            disabled={balancesWithValue.length <= 0 || pendingTx}
            onClick={harvestAllFarms}
            width="100%"
          >
            {pendingTx
              ? TranslateString(548, 'Collecting GME')
              : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
                  count: balancesWithValue.length,
                })}
          </Button>
        ) : (
          <UnlockButton width="100%" />
        )}
      </Actions>
    </CardBody>
  </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
