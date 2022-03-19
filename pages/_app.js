import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/inter";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
