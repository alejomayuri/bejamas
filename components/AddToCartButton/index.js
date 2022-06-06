import styles from "./styles"
import { useContext } from "react"
import { Context } from "../../context/cartProvider"
import { Context as ProductContext } from "../../context/productsProvider"
import useFeaturedProduct from "../../hooks/useFeaturedProduct"

export default function AddToCardButton({ productId, text }) {
    const { cartProducts, setCartProducts, setOpenCartGlobal } = useContext(Context)
    const { products } = useContext(ProductContext)
    const { featuredProduct } = useFeaturedProduct()

    const handleAddToCart = () => {
        const productToAdd = products.find(product => product.id === productId)
        if (!productToAdd) {
            productToAdd = featuredProduct
        }
        console.log(productToAdd)
        if(cartProducts.includes(productToAdd)) {
            const newCartProducts = cartProducts.filter(product => product.id !== productToAdd.id)
            setCartProducts(newCartProducts)
        } else {
            setCartProducts([...cartProducts, productToAdd])
        }

        setOpenCartGlobal(true)
    }

    return (
        <>
            <button onClick={handleAddToCart}>{ text }</button>

            <style jsx>{styles}</style>
        </>

    )
}
