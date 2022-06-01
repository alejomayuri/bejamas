import styles from "./styles"
import Cart from "../Cart"

export default function Header() {
    return (
        <>
            <header>
                <img src="/logo.png" alt="logo" />
                <Cart />
            </header>

            <style jsx>{styles}</style>
        </>
    )
}