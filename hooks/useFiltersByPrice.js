export default function useFilterByPrice({priceFilters}) {

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

    return { filterByPrice };
}