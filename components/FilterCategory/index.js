import styles from "./styles"
import CategoryElement from "../CategoryElement"

export default function FilterCategory({ categories, onChange }) {

    return (
        <>
            <div className="container">
                <div>
                    <h3>Category</h3>
                    <div className="filtersContainer">
                        {
                            categories &&
                            categories.map(category => (
                                <CategoryElement name={category} key={category} category={category} onChange={onChange} title={category} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}