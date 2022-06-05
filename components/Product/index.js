import styles from "./styles"
import AddToCardButton from "../AddToCartButton"

export default function Product({ id, img, category, name, price, bestseller }) {
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
                        <AddToCardButton productId={id}>ADD TO CART</AddToCardButton>
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