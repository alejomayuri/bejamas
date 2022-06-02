import styles from "./styles"

export default function FeaturedPhoto({ name, photo }) {
    return (
        <>
            <div>
                {
                    photo && <>
                        <img src={photo} alt={name} />
                        <span>Photo of the day</span>
                    </>
                }
            </div>

            <style jsx>{styles}</style>
        </>

    )
}
