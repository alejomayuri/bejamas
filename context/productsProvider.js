import {createContext, useEffect, useState } from "react";
import { getProducts } from "../firebase/client";

const Context = createContext()

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products.filter(product => !product.featured))
        })
    }, [])

    return (
        <Context.Provider value={{products, setProducts}}>
            {children}
        </Context.Provider>
    )

}

export {ProductsProvider, Context}
