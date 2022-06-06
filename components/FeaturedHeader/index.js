import styles from "./styles"
import AddToCardButton from "../AddToCartButton"
import { useContext } from "react"
import { Context } from "../../context/cartProvider"

export default function FeaturedHeader({ name, id }) {
    const { cartProducts } = useContext(Context)
    return (
        <>
            <header>
                <h1>{name}</h1>
                <div>
                    <AddToCardButton productId={id} text={
                        cartProducts.find(product => product.id === id) ? "ON CART" : "ADD TO CART"
                    } />
                </div>
            </header>

            <style jsx>{styles}</style>
        </>

    )
}
