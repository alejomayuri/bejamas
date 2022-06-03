export default function useSortProducts() {

    function dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    }

    const sortBy = (entrie, type, direction) => {
        if (type) {
            return direction ? entrie.sort((a, b) => b.price - a.price) : entrie.sort((a, b) => a.price - b.price)
        } else {
            return direction ? entrie.sort(dynamicSort("name")) : entrie.sort(dynamicSort("name")).reverse()
        }
    }

    return { sortBy };
}