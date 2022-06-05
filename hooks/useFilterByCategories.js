import { useState } from "react";

export default function useFilterByCategories() {

    const [categoryFilters, setCategoryFilters] = useState([])

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
            setCategoryFilters(categoryFilters.filter(filter => filter !== value))
        } else {
            setCategoryFilters([...categoryFilters, value])
        }
    }

    return { categoryFilters, setCategoryFilters, filterByCategory, handleOnSelectCategory };
}