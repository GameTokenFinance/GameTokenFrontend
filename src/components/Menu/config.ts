import { MenuEntry} from '@gametoken/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.apeswap.finance/#/swap?outputCurrency=0xDD87Df4697527e6fBc5586cB0105bD8aB0FA7A61',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.apeswap.finance/#/add/0xDD87Df4697527e6fBc5586cB0105bD8aB0FA7A61',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
   
  },
  {
    label: 'Keys',
    icon: 'SunIcon',
    href: '/keys',
  },
  {
    label: 'Pools',
    icon: 'MoonIcon',
    href: '/pools',
  },
  {
    label: 'Our Products',
    icon: 'TradeIcon',
    items: [
      {
        label: 'GameMarket',
       
        href: 'https://gametoken.store',
      },
      {
        label: 'GameDollar',
       
        href: 'https://gdollar.gametoken.finance',
      },
      {
        label: 'GameVault',
        
        href: 'https://gvault.gametoken.finance',
      },
      {
        label: 'GameNFT',
        
        href: '#',
      },
    ],
  },
 
  {
    label: 'Audit',
    icon: 'PredictionsIcon',
    items: [
      {
        label: 'RugDoctor',
       
        href: 'https://rugdoc.io/project/gametoken/',
      },
      {
        label: 'TechRate',
       
        href: 'https://github.com/GameTokenFinance/Contracts/blob/main/audit/GameToken.pdf',
      },
    
    ],
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
       
        href: 'https://dex.guru/token/0xdd87df4697527e6fbc5586cb0105bd8ab0fa7a61-bsc',
      },
      {
        label: 'DappRadar',
       
        href: 'https://dappradar.com/binance-smart-chain/marketplaces/gametokenfinance',
      },
      {
        label: 'LiveCoinWatch',
       
        href: 'https://www.livecoinwatch.com/price/GameToken-GMEV3',
      },
    
    ],
  },


  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/GameTokenFinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.gametoken.finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@GameTokenFi',
      },
      
    ],
  },
]

export default config
