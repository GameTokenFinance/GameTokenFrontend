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
    icon: 'PoolIcon',
    href: '/keys',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  
  {
    label: 'GameMarket',
    icon: 'IfoIcon',
    href: 'https://gametoken.store',
  },
  {
    label: 'GameDollar',
    icon: 'IfoIcon',
    href: 'https://gdollar.gametoken.finance',
  },
  {
    label: 'GameVault',
    icon: 'IfoIcon',
    href: 'https://gvault.gametoken.finance',
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
      {
        label: 'Audit',
        href: 'https://github.com/GameTokenFinance/Contracts/blob/main/audit/GameToken.pdf',
      },
    ],
  },
]

export default config
