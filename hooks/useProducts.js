import { useContext, useEffect, useState } from "react"
import { Context } from "../context/ProductsProvider";
import useFilterByCategories from "./useFilterByCategories";
import useFilterByPrice from "./useFiltersByPrice";
import useSortProducts from "./useSortProducts";
import useCategories from "./useCategories";

export default function useProduscts() {

    const { products } = useContext(Context)

    const [sortedProducts, setSortedProducts] = useState([])
    const [type, setType] = useState(true)
    const [direction, setDirection] = useState(true)
    const [categoryFilters, setFilters] = useState([])
    const [priceFilters, setPriceFilters] = useState([])

    const { filterByCategory } = useFilterByCategories({categoryFilters})
    const { filterByPrice } = useFilterByPrice({priceFilters})
    const { sortBy } = useSortProducts()
    const { categories } = useCategories()

    useEffect(() => {
        setDirection(true)
    }, [type])

    const handleOnSelectCategory = (e) => {
        const { value } = e.target
        if (categoryFilters.includes(value)) {
            setFilters(categoryFilters.filter(filter => filter !== value))
        } else {
            setFilters([...categoryFilters, value])
        }
    }

    const handleOnSelectRange = (e) => {
        const { value } = e.target
        if (priceFilters.includes(value)) {
            setPriceFilters([])
            const element = document.querySelectorAll(`input[name='range']:checked`)
            element.forEach(el => el.checked = false)
        } else {
            setPriceFilters([value]) 
        }
    }

    useEffect(() => {
        setSortedProducts(
            filterByPrice(
                filterByCategory(
                    sortBy(products.map(product => product), type, direction)
                )
            )
        )
    }, [products, type, direction, categoryFilters, priceFilters])

    return {
        sortedProducts,
        categories,
        type,
        direction,
        setType,
        setDirection,
        handleOnSelectCategory,
        handleOnSelectRange
    };
}