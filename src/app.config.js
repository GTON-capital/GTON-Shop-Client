let appConfig = {
  // app name - used in titles
  name: 'GTON Shop',
  // app main title
  title: 'GTON Shop, NFT marketplace',
  // app description
  description: 'GTON Shop, NFT marketplace',
  // app keywords
  keywords: 'GTON Shop, GTON, NFT, NFTs',
  // app's favicon
  favicon: 'public/favicon.svg',
  // app code
  code: process.env.VUE_APP_GTON_MODULE || 'gton-shop',
  // app routes
  module: process.env.VUE_APP_GTON_MODULE || 'gton-shop',
  // apollo client settings
  apollo: {
    // GTON Shop api
    gtonShop: {
      // list of providers. if one of them is unavailable, another is randomly picked
      providers: [
        {
          http: 'https://gton.shop/graphql',
          ws: '',
        },
      ],
      // index into providers array of default provider or 'random' - takes index randomly
      defaultProviderIndex: 'random',
    },
    // GTON api
    gtonNetwork: {
      // list of providers. if one of them is unavailable, another is randomly picked
      providers: [
        {
          http: 'https://gton.shop/graphql',
          // for subscriptions
          ws: '',
        },
      ],
      // index into providers array of default provider or 'random' - takes index randomly
      defaultProviderIndex: 'random',
    },
  },
  // app settings
  settings: {
    languages: [
      { label: 'English', value: 'en' },
      // { label: 'русский', value: 'ru' },
    ],
    defaultLanguage: 'en',
    mobileViewBreakpoint: '64em', // set also variable $breakpoint-mw in assets/scss/_variables.scss
    themes: ['default', 'theme-dark'],
    maxNFTSize: 15000000,
  },
  // progressive web application
  usePWA: true,
  // pwa settings
  pwa: {
    // name used in pwa manifest
    name: 'GTON Shop',
    categories: ['finance'],
    mainColor: '#020205',
    assetsVersion: '1',
  },
  // if `true`, every route will be redirected to 'under maintenance' page
  underMaintenance: false,
  // use hash in address
  routerHashMode: false,
  // GTON mainnet chain id
  chainId: process.env.CHAIN_ID || 50021,
  // JSON-RPC endpointAdd
  // rpc: 'https://rpcapi.fantom.network/',
  // GTON mainnnet rpc
  rpc: process.env.RPC_URL || 'http://170.187.138.20:8545/',
  // used in links pointing to fantom explorer
  explorerUrl: process.env.EXPLORER_URL || 'https://explorer.gton.network/',
  // used in links pointing to validators
  explorerUrl2:
    process.env.EXPLORER_URL2 ||
    process.env.EXPLORER_URL ||
    'https://explorer.gton.network/',
  // default options for production build
  build: {
    // output dir for production build
    outputDir: 'dist',
  },
  // feature flags
  flags: {
    moderatorFunctions: true,
    advertisedCollection: false,
  },
};

if (appConfig.module === 'pg') {
  appConfig = {
    ...appConfig,
    // app name - used in titles
    name: 'Pierre Gasly NFT drop',
    // app main title
    title: 'Pierre Gasly NFT drop',
    // app description
    description:
      'Pierre Gasly launches his NFTs on GTON, as the first NFT drop of an F1™ driver. The NFTs will be redeemable for VIP experiences, meet and greet, signed original helmets and merchandise',
    // app keywords
    keywords: 'Pierre Gasly, F1™ driver, GTON, NFT, NFTs',
    // meta image
    imageUrl: '/img/PierreGaslyNFTdrop.png',
    // app's favicon
    favicon: 'public/favicon.svg',
    // progressive web application
    usePWA: false,
    // specifies if auction is on or off
    auctionOn: true,
    // specifies auction start date - timestamp in UTC
    auctionStart: 1634738400000,
    // specifies if setting page is on/off
    settingsOn: true,
    routerHashMode: true,
  };
}

appConfig.mainnet = {
  chainId: appConfig.chainId,
  rpc: appConfig.rpc,
  explorerUrl: appConfig.explorerUrl,
  explorerUrl2: appConfig.explorerUrl2,
};

module.exports = appConfig;
