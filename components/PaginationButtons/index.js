import styles from "./styles"

export default function PaginationButtons({
    totalProducts,
    bot,
    top,
    pages,
    perPage,
    handlePrevious,
    handleGoToPage,
    handleNext
}) {
    return (
        <>
            <div className="pagination">
                <button disabled={bot == 0} onClick={handlePrevious}>
                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2L3 10L11 18" stroke={bot == 0 ? "#b4b4b4" : "#000"} stroke-width="3" />
                    </svg>
                </button>
                <div className="pages">
                    {
                        Array.from({ length: pages }, (_, i) => (
                            <button
                                className={bot / perPage == i ? 'active' : ''}
                                key={i} onClick={() => handleGoToPage(i)}>
                                {i + 1}
                            </button>
                        ))
                    }
                </div>
                <button disabled={top >= totalProducts.length} onClick={handleNext}>
                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L10 10L2 18" stroke={top >= totalProducts.length ? "#b4b4b4" : "#000"} stroke-width="3" />
                    </svg>
                </button>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}