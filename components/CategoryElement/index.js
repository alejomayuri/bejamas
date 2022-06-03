import styles from "./styles"

export default function CategoryElement({ category, onChange, onClick, name, title }) {

    return (
        <>
            <div>
                <input name={name} type="checkbox" value={category} onChange={onChange} onClick={onClick} />
                <p>{title}</p>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}