import {createContext, useState } from "react";

const Context = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    return (
        <Context.Provider value={{cartProducts, setCartProducts}}>
            {children}
        </Context.Provider>
    )

}

export {CartProvider, Context}
