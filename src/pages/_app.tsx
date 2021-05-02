import 'src/styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { theme } from 'src/styles/theme'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
