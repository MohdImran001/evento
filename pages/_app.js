import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/inter";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} basePath="app">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
