import { useEffect, useState } from "react"
import { getProducts } from "../firebase/client";

export default function useFeaturedProduct() {

    const [featuredProduct, setFeaturedProduct] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            products.filter(product => product.featured).map(product => {
                setFeaturedProduct(product)
            })
        })
    }, [])
    
    return {
        featuredProduct
    };
}