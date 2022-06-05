import { useState } from "react"

export default function useFilterByPrice() {

    const [priceFilters, setPriceFilters] = useState([])

    const filterByPrice = (entrie) => {
        if (priceFilters[0] === 'first') {
            return entrie.filter(product => product.price <= 20)
        }
        if (priceFilters[0] === 'second') {
            return entrie.filter(product => product.price > 20 && product.price <= 100)
        }
        if (priceFilters[0] === 'third') {
            return entrie.filter(product => product.price > 100 && product.price <= 200)
        }
        if (priceFilters[0] === 'fourth') {
            return entrie.filter(product => product.price > 200)
        }
        return entrie
    }

    const handleOnSelectRange = (e) => {
        const { value } = e.target
        if (priceFilters.includes(value)) {
            setPriceFilters([])
        } else {
            setPriceFilters([value])
            const element = document.querySelectorAll(`input[name='range']`)
            element.forEach(el => {
                if (el.value !== value) {
                    el.checked = false
                }
            })
        }
    }

    return { priceFilters, setPriceFilters, filterByPrice, handleOnSelectRange };
}