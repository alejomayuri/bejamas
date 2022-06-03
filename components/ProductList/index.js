import Product from "../Product"
import useProduscts from "../../hooks/useProducts"
import ProductListTitle from "../ProductListTitle"
import ProductListSortHeader from "../ProductListSortHeader"
import FilterCategory from "../FilterCategory"

export default function ProductList() {

    const {
        sortedProducts,
        categories,
        type,
        direction,
        handleOnSelectCategory,
        setType,
        setDirection,
        handleOnSelectRange
    } = useProduscts()

    const RANGES = ['first', 'second', 'third', 'fourth']

    return (
        <>
            <header>
                <ProductListTitle title='Photography' subtitle='Premium Photos' />
                <ProductListSortHeader onClick={() => setDirection(!direction)} onChange={() => setType(!type)} />
            </header>
            <div>
                <div className="filtersContainer">
                    <FilterCategory categories={categories} onChange={handleOnSelectCategory} />
                    <div>
                        <h3>Price range</h3>

                            <div>
                                {
                                    RANGES.map(category => (
                                        <div key={category}>
                                            <input name='range' id={category} type="radio" value={category} onClick={handleOnSelectRange} />
                                            <lable htmlFor={category}>{category}</lable>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                </div>
                <div className="products">
                    {
                        sortedProducts &&
                        sortedProducts.map(product => <Product key={product.id} img={product.image} {...product} />)
                    }
                </div>
            </div>


            <style jsx>{`
                header, div {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }

                .filtersContainer {
                    width: 360px;
                    display: flex;
                    justify-content: space-between;
                }

                .products {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    width: 900px;
                }
            `}</style>
        </>
    )
}