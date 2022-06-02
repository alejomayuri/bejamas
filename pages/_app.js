import '../styles/globals.css'
import { ProductsProvider } from '../context/ProductsProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}

export default MyApp
