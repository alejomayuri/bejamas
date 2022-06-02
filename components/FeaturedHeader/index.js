import styles from "./styles"
import AddToCardButton from "../AddToCartButton"

export default function FeaturedHeader({ name }) {
    return (
        <>
            <header>
                <h1>{name}</h1>
                <div>
                    <AddToCardButton>ADD TO CART</AddToCardButton>
                </div>
            </header>

            <style jsx>{styles}</style>
        </>

    )
}
