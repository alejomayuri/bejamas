import Product from "../Product"
import useProduscts from "../../hooks/useProducts"
import ProductListTitle from "../ProductListTitle"
import ProductListSortHeader from "../ProductListSortHeader"
import FilterCategory from "../FilterCategory"
import FilterPrice from "../FilterPrice"
import PaginationButtons from "../PaginationButtons"

export default function ProductList() {

    const {
        PRODUCTS_PER_PAGE,
        PAGES,
        totalProducts,
        sortedProducts,
        categories,
        bot,
        top,
        handleNext,
        handlePrevious,
        handleGoToPage,
        handleDirection,
        handleType,
        handleOnSelectCategory,
        handleOnSelectRange
    } = useProduscts()

    return (
        <>
            <header>
                <ProductListTitle title='Photography' subtitle='Premium Photos' />
                <ProductListSortHeader onClick={handleDirection} onChange={handleType} />
            </header>
            <div>
                <div className="filtersContainer">
                    <FilterCategory categories={categories} onChange={handleOnSelectCategory} />
                    <FilterPrice onClick={handleOnSelectRange} />
                </div>
                <div className="products__site">
                    <div className="products">
                        {
                            sortedProducts &&
                            sortedProducts.map(product => <Product key={product.id} img={product.image} {...product} />)
                        }
                    </div>
                    <PaginationButtons
                        totalProducts={totalProducts}
                        bot={bot}
                        top={top}
                        pages={PAGES}
                        perPage={PRODUCTS_PER_PAGE}
                        handlePrevious={handlePrevious}
                        handleGoToPage={handleGoToPage}
                        handleNext={handleNext}
                    />

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
                    flex-direction: column;
                    justify-content: flex-start;
                }

                .products__site {
                    display: flex;
                    flex-direction: column;
                }

                .products {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    width: 100%;
                }
            `}</style>
        </>
    )
}