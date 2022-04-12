import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { store } from '../redux/store'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  ) 
}

export default MyApp
