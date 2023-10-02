import type { AppProps } from "next/app";
import { CurrentProvider } from "../hooks/useCurrent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentProvider>
      <Component {...pageProps} />
    </CurrentProvider>
  );
}

export default MyApp;
