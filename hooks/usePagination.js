import { useState } from "react"

export default function usePagination() {

    const PRODUCTS_PER_PAGE = 6;

    const [bot, setBot] = useState(0)
    const [top, setTop] = useState(PRODUCTS_PER_PAGE)

    const limitProducts = (products, bot, top) => {
        return products.slice(bot, top)
    }

    const handleNext = () => {
        setBot(bot + PRODUCTS_PER_PAGE)
        setTop(top + PRODUCTS_PER_PAGE)
    }

    const handlePrevious = () => {
        setBot(bot - PRODUCTS_PER_PAGE)
        setTop(top - PRODUCTS_PER_PAGE)
    }

    const handleGoToPage = (page) => {
        setBot(page * PRODUCTS_PER_PAGE)
        setTop(page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE)
    }

    return { bot, top, setBot, setTop, handleNext, handlePrevious, handleGoToPage, limitProducts, PRODUCTS_PER_PAGE };
}