import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.gme,
    earningToken: tokens.gme,
    contractAddress: { // masterChef contract
      97: '',
      56: '0xA05E0dc94A139d03812f5E6716c9De0a015da699',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 1,
    stakingToken: tokens.gme,
    earningToken: tokens.watch,
    contractAddress: {
      97: '',
      56: '0x20Df18d9aAD8398cB8609D1A87e230Ff9BaD3833',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.001',
    sortOrder: 999,
  },

  
]

export default pools
