import styles from "./styles"
import { useContext, useState } from "react"
import { Context } from "../../context/cartProvider"

export default function Cart() {
    const { cartProducts, setCartProducts, openCartGlobal, setOpenCartGlobal } = useContext(Context)

    const handleCleanCart = () => {
        setCartProducts([])
        setOpenCartGlobal(false)
    }

    return (
        <>
            <button disabled={cartProducts.length === 0} onClick={() => setOpenCartGlobal(!openCartGlobal)}>
                <img src="/cart.png" alt="cart" />
                {
                    cartProducts.length > 0 &&
                    <span className="number">{cartProducts.length}</span>
                }
            </button>
            {
                openCartGlobal &&
                <div className="open__cart">
                    <div className="container">
                        <div className="cart__header">
                            <button onClick={() => setOpenCartGlobal(!openCartGlobal)}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L20 20" stroke="black" strokeWidth="4" />
                                    <path d="M2 20L20 2" stroke="black" strokeWidth="4" />
                                </svg>
                            </button>
                        </div>
                        <div className="cart__container">
                            {
                                cartProducts.map(product => (
                                    <div className="cart__element" key={product.id}>
                                        <div className="cart__text">
                                            <p>{product.name}</p>
                                            <span>{`$${product.price}`}</span>
                                        </div>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cart__clear__button">
                            <div className="cart__clear__button__container">
                                <button onClick={handleCleanCart}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            }



            <style jsx>{styles}</style>
        </>
    )
}