export default function useFilterByCategories({categoryFilters}) {

    const filterByCategory = (entrie) => {
        if (categoryFilters.length > 0) {
            return entrie.filter(product => categoryFilters.includes(product.category))
        } else {
            return entrie
        }
    }

    return { filterByCategory };
}