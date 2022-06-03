import styles from "./styles"

export default function ProductListTitle({ title, subtitle }) {

    return (
        <>
            <div>
                <h2>{title}</h2>
                <span>/</span>
                <p>{subtitle}</p>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}