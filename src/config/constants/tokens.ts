const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  gme: {
    symbol: 'GME',
    address: {
      56: '0xDD87Df4697527e6fBc5586cB0105bD8aB0FA7A61',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://gametoken.finance/',
  },
  auto: {
    symbol: 'auto',
    address: {
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://autofarm.network/',
  },
  avax: {
    symbol: 'avax',
    address: {
      56: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://autofarm.network/',
  },
   matic: {
    symbol: 'matic',
    address: {
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },
  busdt: {
    symbol: 'busdt',
    address: {
      56: '0x55d398326f99059ff775485246999027b3197955',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },
  aave: {
    symbol: 'aave',
    address: {
      56: '0xfb6115445bff7b52feb98650c87f44907e58f802',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://aave.com',
  },
  
  ont: {
    symbol: 'ont',
    address: {
      56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ont.io/',
  },
  ftm: {
    symbol: 'ftm',
    address: {
      56: '0xad29abb318791d579433d831ed122afeaf29dcfe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ont.io/',
  },
  banana: {
    symbol: 'BANANA',
    address: {
      56: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://apeswap.finance/',
  },
  mdo: {
    symbol: 'MDO',
    address: {
      56: '0x35e869B7456462b81cdB5e6e42434bD27f3F788c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://https://midasdollar.fi/',
  },
  
  sbdo: {
    symbol: 'SBDO',
    address: {
      56: '0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bdollar.fi/',
  },
  
  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },


  watch: {
    symbol: 'WATCH',
    address: {
      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://yieldwatch.net/',
  },

 
  bdo: {
    symbol: 'BDO',
    address: {
      56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bdollar.fi/',
  },
  egld: {
    symbol: 'EGLD',
    address: {
      56: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://elrond.com/',
  },
  ust: {
    symbol: 'UST',
    address: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  wsote: {
    symbol: 'wSOTE',
    address: {
      56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://soteria.finance/#/',
  },
  front: {
    symbol: 'FRONT',
    address: {
      56: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://frontier.xyz/',
  },
  helmet: {
    symbol: 'Helmet',
    address: {
      56: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.helmet.insure/',
  },
  btcst: {
    symbol: 'BTCST',
    address: {
      56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
      97: '',
    },
    decimals: 17,
    projectLink: 'https://www.1-b.tc/',
  },
  bscx: {
    symbol: 'BSCX',
    address: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bscex.org/',
  },
  ten: {
    symbol: 'TEN',
    address: {
      56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.tenet.farm/',
  },
  balbt: {
    symbol: 'bALBT',
    address: {
      56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://allianceblock.io/',
  },
  asr: {
    symbol: 'ASR',
    address: {
      56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  atm: {
    symbol: 'ATM',
    address: {
      56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  og: {
    symbol: 'OG',
    address: {
      56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  reef: {
    symbol: 'REEF',
    address: {
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://reef.finance/',
  },
  ditto: {
    symbol: 'DITTO',
    address: {
      56: '0x233d91a0713155003fc4dce0afa871b508b3b715',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },
  juv: {
    symbol: 'JUV',
    address: {
      56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  psg: {
    symbol: 'PSG',
    address: {
      56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  vai: {
    symbol: 'VAI',
    address: {
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  blink: {
    symbol: 'BLINK',
    address: {
      56: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },
  unfi: {
    symbol: 'UNFI',
    address: {
      56: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://unifiprotocol.com',
  },
  twt: {
    symbol: 'TWT',
    address: {
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  hard: {
    symbol: 'HARD',
    address: {
      56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://hard.kava.io',
  },
  broobee: {
    symbol: 'bROOBEE',
    address: {
      56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://roobee.io/',
  },
  stax: {
    symbol: 'STAX',
    address: {
      56: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://stablexswap.com/',
  },
  nar: {
    symbol: 'NAR',
    address: {
      56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://narwhalswap.org/',
  },
  nya: {
    symbol: 'NYA',
    address: {
      56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://nyanswop.org/',
  },
  ctk: {
    symbol: 'CTK',
    address: {
      56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.certik.foundation/',
  },
  inj: {
    symbol: 'INJ',
    address: {
      56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://injectiveprotocol.com/',
  },
  sxp: {
    symbol: 'SXP',
    address: {
      56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swipe.io/',
  },
  alpha: {
    symbol: 'ALPHA',
    address: {
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://alphafinance.io/',
  },
  xvs: {
    symbol: 'XVS',
    address: {
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://sushi.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      56: '0xA2e62D43B5340E269Cad0A06D4813957BC56cA31',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      56: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://beefy.finance/',
  },
  dusk: {
    symbol: 'DUSK',
    address: {
      56: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dusk.network/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  beth: {
    symbol: 'BETH',
    address: {
      56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
  },
  mamzn: {
    symbol: 'mAMZN',
    address: {
      56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mgoogl: {
    symbol: 'mGOOGL',
    address: {
      56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mnflx: {
    symbol: 'mNFLX',
    address: {
      56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mtsla: {
    symbol: 'mTSLA',
    address: {
      56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://www.makerdao.com/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.cardano.org/',
  },
  band: {
    symbol: 'BAND',
    address: {
      56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bandprotocol.com/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://eos.io/',
  },
  link: {
    symbol: 'LINK',
    address: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    decimals: 18,
    projectLink: 'https://www.tezos.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'http://bch.info/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  fil: {
    symbol: 'FIL',
    address: {
      56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.bakeryswap.org/',
  },
  burger: {
    symbol: 'BURGER',
    address: {
      56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://burgerswap.org/',
  },
  bdigg: {
    symbol: 'bDIGG',
    address: {
      56: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  bbadger: {
    symbol: 'bBadger',
    address: {
      56: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  trade: {
    symbol: 'TRADE',
    address: {
      56: '0x7af173f350d916358af3e218bdf2178494beb748',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://unitrade.app/',
  },
  pnt: {
    symbol: 'PNT',
    address: {
      56: '0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  mir: {
    symbol: 'MIR',
    address: {
      56: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  pbtc: {
    symbol: 'pBTC',
    address: {
      56: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  lto: {
    symbol: 'LTO',
    address: {
      56: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ltonetwork.com/',
  },
  pcws: {
    symbol: 'pCWS',
    address: {
      56: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://game.seascape.network/',
  },
  zil: {
    symbol: 'ZIL',
    address: {
      56: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
      97: '',
    },
    decimals: 12,
    projectLink: 'https://www.zilliqa.com/',
  },
  lien: {
    symbol: 'LIEN',
    address: {
      56: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://lien.finance/',
  },
  swth: {
    symbol: 'SWTH',
    address: {
      56: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://switcheo.network/',
  },
  dft: {
    symbol: 'DFT',
    address: {
      56: '0x42712dF5009c20fee340B245b510c0395896cF6e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.dfuture.com/home',
  },
  gum: {
    symbol: 'GUM',
    address: {
      56: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://gourmetgalaxy.io/',
  },
  dego: {
    symbol: 'DEGO',
    address: {
      56: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.dego.finance/home',
  },
  nrv: {
    symbol: 'NRV',
    address: {
      56: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://nerve.fi/',
  },
}

export default tokens
