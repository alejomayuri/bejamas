import styles from "./styles"

export default function FeaturedAbout({ name, category, description }) {
    return (
        <>
            <div>
                <h2>{`About ${name}`}</h2>
                <h3>{category}</h3>
                <p>{description}</p>
            </div>

            <style jsx>{styles}</style>
        </>

    )
}
