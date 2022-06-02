import Product from "../Product"
import useProduscts from "../../hooks/useProducts"

export default function ProductList() {

    const {
        sortedProducts,
        handleSelect,
        handleChangeSort
    } = useProduscts()

    return (
        <>
            <div>
                <select onChange={handleSelect}>
                    <option value='price'>Price</option>
                    <option value='name'>Name</option>
                </select>
                
                {/* <button onClick={sortProductsByName}>Name</button> */}
                <button onClick={handleChangeSort}>Change</button>
            </div>
            <div> 
                {
                sortedProducts &&
                    sortedProducts.map(product => <Product key={product.id} img={product.image} {...product}  />)
                }
            </div>

            <style jsx>{`
                div {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    width: 900px;
                }    
            
            `}</style>
        </>
    )
}