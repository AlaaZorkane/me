import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Div100vh from "react-div-100vh";
import { GlobalStyles } from "~/styles/global";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => (
  <Div100vh>
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  </Div100vh>
);

export default App;
