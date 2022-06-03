import { useState } from "react";

export default function useFilterByCategories() {

    const [categoryFilters, setFilters] = useState([])

    const filterByCategory = (entrie) => {
        if (categoryFilters.length > 0) {
            return entrie.filter(product => categoryFilters.includes(product.category))
        } else {
            return entrie
        }
    }

    const handleOnSelectCategory = (e) => {
        const { value } = e.target
        if (categoryFilters.includes(value)) {
            setFilters(categoryFilters.filter(filter => filter !== value))
        } else {
            setFilters([...categoryFilters, value])
        }
    }

    return { categoryFilters, filterByCategory, handleOnSelectCategory };
}