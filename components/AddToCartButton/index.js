import styles from "./styles"

export default function AddToCardButton({ children }) {
    return (
        <>
            <button>{ children }</button>

            <style jsx>{styles}</style>
        </>

    )
}
