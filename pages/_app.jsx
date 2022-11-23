import { Box, ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"

import theme from "../theme"

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Box borderTop="4px solid" borderTopColor="blue.500">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </SessionProvider>
  )
}
