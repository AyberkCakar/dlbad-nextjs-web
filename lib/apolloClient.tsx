import { ApolloClient, InMemoryCache } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash-es/isEqual';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const isServer = typeof window === 'undefined';
let apolloClient: ApolloClient<any>;

function createApolloClient() {
  return new ApolloClient({
    uri: 'http://localhost:34343/v1/graphql',
    cache: new InMemoryCache(),
    ssrMode: isServer
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        )
      ]
    });

    _apolloClient.cache.restore(data);
  }
  if (isServer) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
