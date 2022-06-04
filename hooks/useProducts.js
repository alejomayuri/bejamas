import { useContext, useEffect, useState } from "react"
import { Context } from "../context/ProductsProvider";
import useFilterByCategories from "./useFilterByCategories";
import useFilterByPrice from "./useFiltersByPrice";
import useSortProducts from "./useSortProducts";
import useCategories from "./useCategories";
import usePagination from "./usePagination";

export default function useProduscts() {

    const { products } = useContext(Context)

    const [sortedProducts, setSortedProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState([])

    const { categoryFilters, filterByCategory, handleOnSelectCategory } = useFilterByCategories()
    const { priceFilters, filterByPrice, handleOnSelectRange } = useFilterByPrice()
    const { type, direction, setType, setDirection, sortBy } = useSortProducts()
    const { categories } = useCategories()
    const { bot, top, setBot, setTop, handleNext, handlePrevious, handleGoToPage, limitProducts, PRODUCTS_PER_PAGE } = usePagination()

    useEffect(() => {
        setDirection(true)
    }, [type])

    const PAGES = Math.ceil(totalProducts.length / PRODUCTS_PER_PAGE);

    useEffect(() => {
        setSortedProducts(
            limitProducts(
                filterByPrice(
                    filterByCategory(
                        sortBy(products.map(product => product), type, direction)
                    )
                )
                , bot, top)
        )
    }, [products, type, direction, categoryFilters, priceFilters, bot, top])

    useEffect(() => {
        setTotalProducts(
            filterByPrice(
                filterByCategory(
                    sortBy(products.map(product => product), type, direction)
                )
            )
        )
    }, [products, type, direction, categoryFilters, priceFilters])

    const handleDirection = () => {
        setDirection(!direction)
        setBot(0)
        setTop(PRODUCTS_PER_PAGE)
    }

    const handleType = () => {
        setType(!type)
        setBot(0)
        setTop(PRODUCTS_PER_PAGE)
    }

    return {
        PRODUCTS_PER_PAGE,
        PAGES,
        totalProducts,
        sortedProducts,
        categories,
        bot,
        top,
        handleNext,
        handlePrevious,
        handleGoToPage,
        handleDirection,
        handleType,
        handleOnSelectCategory,
        handleOnSelectRange
    };
}