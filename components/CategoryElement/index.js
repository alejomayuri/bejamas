import styles from "./styles"

export default function CategoryElement({ category, onChange, onClick, name, title }) {

    return (
        <>
            <div>
                <input id={category} name={name} type="checkbox" value={category} onChange={onChange} onClick={onClick} />
                <label htmlFor={category}>{title}</label>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}