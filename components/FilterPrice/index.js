import styles from "./styles"
import CategoryElement from "../CategoryElement"

export default function FilterPrice({ onClick }) {
    const RANGES = ['first', 'second', 'third', 'fourth']

    return (
        <>
            <div className="container">
                <div>
                    <h3>Price range</h3>
                    <div className="filtersContainer">
                        {
                            RANGES.map(category => (
                                <CategoryElement
                                    name={'range'}
                                    key={category}
                                    category={category}
                                    onClick={onClick}
                                    title={
                                        category === 'first' ? 'Lower than $20' :
                                            category === 'second' ? '$20 - $100' :
                                                category === 'third' ? '$100 - $200' :
                                                    'More than $200'
                                    }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}