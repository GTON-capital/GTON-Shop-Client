import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import VueApollo from 'vue-apollo';
import appConfig from '@/app.config.js';
import { GApolloClient } from './GApolloClient.js';

export const gtonSApolloClient = new GApolloClient({
  apolloProviders: appConfig.apollo.gtonShop.providers,
  defaultProviderIndex: appConfig.apollo.gtonShop.defaultProviderIndex,
});

export const gtonNetworkApolloClient = new GApolloClient({
  apolloProviders: appConfig.apollo.gtonNetwork.providers,
  defaultProviderIndex: appConfig.apollo.gtonNetwork.defaultProviderIndex,
});

export const gtonShopApolloClient = new ApolloClient({
  link: ApolloLink.from([
    gtonSApolloClient.getNetErrorLink(),
    gtonSApolloClient.getRetryLink(),
    gtonSApolloClient.getErrorLink(),
    gtonSApolloClient.getHttpAuthLink(),
    gtonSApolloClient.getHttpLink(),
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export const gtonApolloClient = new ApolloClient({
  link: ApolloLink.from([
    gtonNetworkApolloClient.getNetErrorLink(),
    gtonNetworkApolloClient.getRetryLink(),
    gtonNetworkApolloClient.getErrorLink(),
    gtonNetworkApolloClient.getHttpLink(),
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  clients: {
    gtonShop: gtonShopApolloClient,
    gtonNetwork: gtonApolloClient,
  },
  defaultClient: gtonShopApolloClient,
  defaultOptions: {
    $query: {
      fetchPolicy: 'network-only', // 'cache-and-network', 'network-only', 'cache-first'
    },
  },
});
