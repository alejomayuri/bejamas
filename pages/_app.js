import '../styles/globals.css'
import { ProductsProvider } from '../context/ProductsProvider'
import { CartProvider } from '../context/cartProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ProductsProvider>
  )
}

export default MyApp
