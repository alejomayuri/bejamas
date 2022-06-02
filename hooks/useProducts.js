import { useContext, useState } from "react"
import { Context } from "../context/ProductsProvider";

const DEFAULT_SORT_VALUE = {
    on: "down",
    off: null
}

export default function useProduscts() {

    const { products } = useContext(Context)

    const [sortTypeByPrice, setSortTypeByPrice] = useState(DEFAULT_SORT_VALUE.on)
    const [sortTypeByName, setSortTypeByName] = useState(DEFAULT_SORT_VALUE.off)

    function dynamicSort(property) {
        var sortOrder = 1;
    
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
    
        return function (a,b) {
            if(sortOrder == -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    }

    const sortUpAndDown = (f) => {
        if (sortTypeByPrice === 'up') {
            return f.sort((a, b) => b.price - a.price)
        } else if (sortTypeByPrice  === 'down') {
            return f.sort((a, b) => a.price - b.price)
        }
        if (sortTypeByName === 'up') {
            return f.sort(dynamicSort("name")).reverse()
        } else if (sortTypeByName  === 'down') {
            return f.sort(dynamicSort("name"))
        }
        
        return f
    }

    const handleSelect = (e) => {
        const { value } = e.target
        if (value === 'price') {
            setSortTypeByName(DEFAULT_SORT_VALUE.off)
            setSortTypeByPrice(DEFAULT_SORT_VALUE.on)
        } else {
            setSortTypeByPrice(DEFAULT_SORT_VALUE.off)
            setSortTypeByName(DEFAULT_SORT_VALUE.on)
        }
    }

    const handleChangeSort = () => {
        if (sortTypeByPrice === 'up') {
            setSortTypeByPrice('down')
        } else if (sortTypeByPrice === 'down') {
            setSortTypeByPrice('up')
        }

        if (sortTypeByName === 'up') {
            setSortTypeByName('down')
        } else if (sortTypeByName === 'down') {
            setSortTypeByName('up')
        }
    }

    const sortedProducts = sortUpAndDown(products)
    
    return {
        sortedProducts,
        handleSelect,
        handleChangeSort
    };
}