import styles from "./styles"
import { useContext } from "react"
import { Context } from "../../context/cartProvider"
import { Context as ProductContext } from "../../context/ProductsProvider"
import useFeaturedProduct from "../../hooks/useFeaturedProduct"

export default function AddToCardButton({ children, productId }) {
    const { cartProducts, setCartProducts } = useContext(Context)
    const { products } = useContext(ProductContext)
    const { featuredProduct } = useFeaturedProduct()

    const handleAddToCart = () => {
        const productToAdd = products.find(product => product.id === productId)
        if (!productToAdd) {
            productToAdd = featuredProduct
        }
        if(!cartProducts.find(product => product.id === productId)) {
            setCartProducts([...cartProducts, productToAdd])
        } else {
            const newCartProducts = cartProducts.filter(product => product.id !== productId)
            setCartProducts([...newCartProducts, productToAdd])
        }
    }

    return (
        <>
            <button onClick={handleAddToCart}>{ children }</button>

            <style jsx>{styles}</style>
        </>

    )
}
