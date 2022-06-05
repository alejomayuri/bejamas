import styles from "./styles"
import { useContext } from "react"
import { Context } from "../../context/cartProvider"
import { Context as ProductContext } from "../../context/productsProvider"
import useFeaturedProduct from "../../hooks/useFeaturedProduct"

export default function AddToCardButton({ children, productId }) {
    const { cartProducts, setCartProducts, setOpenCartGlobal } = useContext(Context)
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
        setOpenCartGlobal(true)
    }

    return (
        <>
            <button onClick={handleAddToCart}>{ children }</button>

            <style jsx>{styles}</style>
        </>

    )
}
