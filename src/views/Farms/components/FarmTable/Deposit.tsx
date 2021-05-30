import React from 'react'
import styled from 'styled-components'
import { HelpIcon, Text } from '@gametoken/uikit'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'



export interface DepositProps {
  deposit: number 
}


const DepositWrapper = styled.div`
min-width: 110px;
font-weight: 600;
text-align: right; 

${({ theme }) => theme.mediaQueries.sm} {
  text-align: left;
}
`

const Container = styled.div`
display: flex;
align-items: center;

svg {
  margin-left: 14px;
}

${({ theme }) => theme.mediaQueries.sm} {
  svg {
    margin-left: 0;
  }
}
`


const Deposit: React.FunctionComponent<DepositProps> = ({ deposit }) => {
  const displayDeposit = deposit
  
  const TranslateString = useI18n()

  return (
    <Container>
      <DepositWrapper>
        <Text>{displayDeposit / 100}%</Text>
      </DepositWrapper>
     
    </Container>
  )
}

export default Deposit
