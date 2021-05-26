import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@gametoken/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  depositFee?: number
}

const Wrapper = styled(Flex)`
  png {
    margin-right: 10px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={171} height={120} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="2px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
        
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
