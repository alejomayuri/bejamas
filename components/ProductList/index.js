import { useState } from "react"
import Product from "../Product"
import useProduscts from "../../hooks/useProducts"
import ProductListTitle from "../ProductListTitle"
import ProductListSortHeader from "../ProductListSortHeader"
import FilterCategory from "../FilterCategory"
import FilterPrice from "../FilterPrice"
import PaginationButtons from "../PaginationButtons"

import { breakpoints } from "../../styles/theme"

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

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <header>
                <ProductListTitle title='Photography' subtitle='Premium Photos' />
                <ProductListSortHeader showMenu={setShowMenu} onClick={handleDirection} onChange={handleType} />
            </header>
            <div className="container">
                <div className="filtersFixed">
                    <div className="filtersContainer">
                        <FilterCategory categories={categories} onChange={handleOnSelectCategory} />
                        <FilterPrice onClick={handleOnSelectRange} />
                    </div>
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

                .filtersFixed {
                    background-color: transparent;
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

                @media (max-width: ${breakpoints.mobile}) {
                    .container {
                        position: absolute;
                        z-index: 9999;
                    }
                    .filtersFixed {
                        position: fixed;
                        z-index: ${showMenu ? '99999' : '1'};
                        height: ${showMenu ? '100vh' : '0'};
                        top: 0;
                        padding-top: 100px;
                        background: #8484845c;
                        background: ${showMenu ? '#6a6a6a7a' : 'transparent'};
                    }{/* top: 0;
                        z-index: 9999;
                        width: 100%;
                        display: ${showMenu ? 'flex' : 'none'};
                        height: 100vh;
                        position: fixed;
                        padding-top: 100px;
                        background: #6a6a6a7a;
                        overflow-y: scroll; */}
                    .filtersContainer {
                        top: 0;
                        z-index: 9999;
                        width: 100%;
                        display: ${showMenu ? 'flex' : 'none'};
                        height: 100vh;
                        position: fixed;
                        margin-top: 100px;
                        overflow-y: scroll;
                    }
                }
            `}</style>
        </>
    )
}