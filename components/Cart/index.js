import styles from "./styles"

export default function Cart() {

    const handleClick = () => console.log('hola')

    return(
        <>  
            <button onClick={handleClick}>
                <img src="/cart.png" alt="cart" />
                <span>1</span>
            </button>

            <style jsx>{styles}</style>
        </>
    )
}