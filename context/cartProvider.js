import {createContext, useState } from "react";

const Context = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [openCartGlobal, setOpenCartGlobal] = useState(false)

    return (
        <Context.Provider value={{cartProducts, setCartProducts, openCartGlobal, setOpenCartGlobal}}>
            {children}
        </Context.Provider>
    )

}

export {CartProvider, Context}
