import {createContext, useEffect, useState } from "react";
import getProducts from "../services/getProducts";

const Context = createContext()

const ProductsToShowProvider = ({children}) => {
    const [productsToShow, setProductsToShow] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProductsToShow(products)
        })
    }, [])

    return (
        <Context.Provider value={{productsToShow, setProductsToShow}}>
            {children}
        </Context.Provider>
    )

}

export {ProductsToShowProvider, Context}
