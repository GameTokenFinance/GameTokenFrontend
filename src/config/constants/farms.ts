import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [

  {
    pid: 0,
    lpSymbol: 'GME',
    lpAddresses: {
      97: '',
      56: '0xDD87Df4697527e6fBc5586cB0105bD8aB0FA7A61',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },  

  {
    pid: 1,
    lpSymbol: 'GME-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6B234237bc3f4D5c34521f542876b877566b9B14',
    },
    token: tokens.busd,
    quoteToken: tokens.gme,
    
  },


  {
    pid: 2,
    lpSymbol: 'GME-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0a6DD2E402531009B0f13fFEBA9DF48625a86e72',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
    
  },

  {
    pid: 10,
    lpSymbol: 'GME-BANANA LP',
    lpAddresses: {
      97: '',
      56: '0x7E74D582f47355AFAa7F644547d530A738704AE5',
    },
    token: tokens.gme,
    quoteToken: tokens.banana,    
  },

  {
    pid: 8,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51e6D27FA57373d8d4C256231241053a70Cb1d93',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 9,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 11,
    lpSymbol: 'AUTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x649A5Ad5135B4bd287e5AcA8d41f4d5e1b52af5C',
    },
    token: tokens.auto,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 12,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa00A91fBB39051e2a6368424A93895c3f1F2290b',
    },
    token: tokens.watch,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 13,
    lpSymbol: 'ONT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x924D3f2F94618e8Ee837d4C2b8d703F0de12a57e',
    },
    token: tokens.ont,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 14,
    lpSymbol: 'FTM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x47A0B7bA18Bb80E4888ca2576c2d34BE290772a6',
    },
    token: tokens.ftm,
    quoteToken: tokens.wbnb,
    
  },
  {
    pid: 15,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6f0f18f5fcC1466ec41c8106689e10BeFE68D1c0',
    },
    token: tokens.xrp,
    quoteToken: tokens.wbnb,
    
  },
  
 
  // caves (should add token address with lptoken address when add pool)
  {
    pid: 5,
    lpSymbol: 'Cake',
     lpAddresses: {
       97: '',
       56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },

   {
    pid: 6,
    lpSymbol: 'Busd',
     lpAddresses: {
       97: '',
       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,    
    isTokenOnly: true,
   },

   {
    pid: 7,
    lpSymbol: 'wBNB',
     lpAddresses: {
       97: '',
       56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },

   {
    pid: 16,
    lpSymbol: 'Auto',
     lpAddresses: {
       97: '',
       56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    token: tokens.auto,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   {
    pid: 17,
    lpSymbol: 'Ont',
     lpAddresses: {
       97: '',
       56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    },
    token: tokens.ont,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   {
    pid: 18,
    lpSymbol: 'Sbdo',
     lpAddresses: {
       97: '',
       56: '0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740',
    },
    token: tokens.sbdo,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   {
    pid: 19,
    lpSymbol: 'Watch',
     lpAddresses: {
       97: '',
       56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
    },
    token: tokens.watch,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   {
    pid: 20,
    lpSymbol: 'Xrp',
     lpAddresses: {
       97: '',
       56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    },
    token: tokens.xrp,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   {
    pid: 21,
    lpSymbol: 'Zil',
     lpAddresses: {
       97: '',
       56: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
    },
    token: tokens.zil,
    quoteToken: tokens.busd,
    isTokenOnly: true,
   },
   
]

export default farms
