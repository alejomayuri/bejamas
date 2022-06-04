import styles from "./styles"

export default function Product({ img, category, name, price, bestseller }) {
    return (
        <>
            <div>
                {
                    bestseller &&
                    <div className="bestseller">
                        <span>Best Seller</span>
                    </div>
                }
                <img src={img} />
                <p>{category}</p>
                <h3>{name}</h3>
                <span>{`$${price}`}</span>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}