'use client';

import { ApolloLink, HttpLink, SuspenseCache } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient
} from '@apollo/experimental-nextjs-app-support/ssr';

const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || 'http://localhost:34343/v1/graphql';

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
