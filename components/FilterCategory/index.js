import styles from "./styles"
import CategoryElement from "../CategoryElement"

export default function FilterCategory({ categories, onChange }) {

    return (
        <>
            <div>
                <h3>Category</h3>
                <div>
                    {
                        categories &&
                        categories.map(category => (
                            <CategoryElement key={category} category={category} onChange={onChange} />
                        ))
                    }
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}