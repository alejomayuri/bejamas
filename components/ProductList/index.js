import { useContext, useState } from "react"
import Product from "../Product"
import useProduscts from "../../hooks/useProducts"
import ProductListTitle from "../ProductListTitle"
import ProductListSortHeader from "../ProductListSortHeader"
import FilterCategory from "../FilterCategory"
import FilterPrice from "../FilterPrice"
import PaginationButtons from "../PaginationButtons"
import ButtonMobileDisplay from "../ButtonMobileDisplay"
import { Context } from "../../context/cartProvider"

import { breakpoints } from "../../styles/theme"

export default function ProductList() {

    const { cartProducts } = useContext(Context)

    const {
        PRODUCTS_PER_PAGE,
        PAGES,
        totalProducts,
        sortedProducts,
        categories,
        bot,
        top,
        setPriceFilters,
        setCategoryFilters,
        handleNext,
        handlePrevious,
        handleGoToPage,
        handleDirection,
        handleType,
        handleOnSelectCategory,
        handleOnSelectRange
    } = useProduscts()

    const [showMenu, setShowMenu] = useState(false)

    const handleClearFilters = () => {
        setCategoryFilters([])
        setPriceFilters([])
        const element = document.querySelectorAll(`input:checked`)
        element.forEach(el => {
            el.checked = false
        })
        setShowMenu(false)
    }

    return (
        <>
            <header>
                <ProductListTitle title='Photography' subtitle='Premium Photos' />
                <ProductListSortHeader showMenu={setShowMenu} onClick={handleDirection} onChange={handleType} />
            </header>
            <div className="container">
                <div className="filtersFixed">
                    <div className="filtersContainer">
                        <button className="closeFilters" onClick={() => setShowMenu(false)}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L20 20" stroke="black" strokeWidth="4" />
                                <path d="M2 20L20 2" stroke="black" strokeWidth="4" />
                            </svg>
                        </button>
                        <FilterCategory categories={categories} onChange={handleOnSelectCategory} />
                        <FilterPrice onClick={handleOnSelectRange} />
                        <div className='mobile__displayer'>
                            <ButtonMobileDisplay title={'CLEAR'} onClick={handleClearFilters} clear={true} />
                            <ButtonMobileDisplay title={'SAVE'} onClick={() => setShowMenu(false)} clear={false} />
                        </div>
                    </div>
                </div>
                <div className="products__site">
                    <div className="products">
                        {
                            sortedProducts &&
                                sortedProducts.length > 0
                                ? sortedProducts.map(product => <Product key={product.id} img={product.image} {...product} />)
                                : <p>No products found</p>
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

                .container {
                    margin-top: 30px;
                }

                .filtersFixed {
                    background-color: transparent;
                    width: 360px;
                }

                .filtersContainer {
                    width: 310px;
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

                .closeFilters {
                    display: none;
                }

                .mobile__displayer {
                    display: none;
                }
                
                
                @media (max-width: ${breakpoints.mobile}) {
                    .filtersFixed {
                        position: fixed;
                        display: ${showMenu ? 'flex' : 'none'};
                        z-index: ${showMenu ? '99999' : '1'};
                        height: ${showMenu ? '100vh' : '0'};
                        top: 0;
                        padding-top: 100px;
                        background: #8484845c;
                        background: ${showMenu ? '#6a6a6a7a' : 'transparent'};
                        width: 100%;
                    }

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

                    .closeFilters {
                        position: absolute;
                        right: 30px;
                        top: 40px;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                        display: ${showMenu ? 'block' : 'none'};
                    }

                    .mobile__displayer {
                        display: ${showMenu ? 'flex' : 'none'};
                        position: fixed;
                        bottom: 0;
                        background: #fff;
                        width: 100%;
                        height: 100px;
                        border-top: 4px solid #E4E4E4;
                        align-items: center;
                        justify-content: space-evenly;
                    }
                }
            `}</style>
        </>
    )
}