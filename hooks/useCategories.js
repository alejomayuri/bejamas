import { Context } from "../context/ProductsProvider";
import { useContext, useEffect, useState } from "react";

export default function useCategories() {

    const { products } = useContext(Context)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories([...new Set(products.map(product => product.category))])
    }, [products])

    return { categories };
}