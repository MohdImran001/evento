import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "@fontsource/inter";
import "@fontsource/poppins";

import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    brand: "#1e0a3c",
    secondary: "#6f7287",
    brandOrange: "rgb(240, 85, 55)",
    brandBlue: "rgb(61, 100, 255)",
    secondaryBlue: "rgba(61, 100, 255, 0.1)",
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
