import type { AppProps } from 'next/app';
import { CurrentProvider } from '../hooks/useCurrent';
import { ApolloWrapper } from '../lib/apollo-wrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <CurrentProvider>
        <Component {...pageProps} />
      </CurrentProvider>
    </ApolloWrapper>
  );
}

export default MyApp;
