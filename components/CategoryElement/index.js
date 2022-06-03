import styles from "./styles"

export default function CategoryElement({ category, onChange }) {

    return (
        <>
            <div key={category}>
                <input name={category} type="checkbox" value={category} onChange={onChange} />
                <p>{category}</p>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}