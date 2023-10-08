import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || 'http://localhost:34343/v1/graphql';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT
    })
  });
});
