import styles from "./styles"
import AddToCardButton from "../AddToCartButton"
import { useContext } from "react"
import { Context } from "../../context/cartProvider"

export default function Product({ id, img, category, name, price, bestseller }) {

    const { cartProducts } = useContext(Context)

    return (
        <>
            <div className="container">

                <div className="img__container">
                    {
                        bestseller &&
                        <div className="bestseller">
                            <span>Best Seller</span>
                        </div>
                    }
                    <img src={img} alt={name} />
                    <div className="add__cart">
                        <AddToCardButton productId={id} text={
                            cartProducts.find(product => product.id === id) ? "ON CART" : "ADD TO CART"
                        } />
                    </div>
                </div>

                <p>{category}</p>
                <h3>{name}</h3>
                <span>{`$${price}`}</span>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}