import styles from "./styles"

export default function AppLayout({ children }) {
    return (
        <>
            <main>{children}</main>

            <style jsx>{styles}</style>
        </>
    )
}