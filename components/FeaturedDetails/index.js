import styles from "./styles"

export default function FeaturedDetails({details, widthDiemension, HeightDimension, size}) {
    return (
        <>
            <div>
                <h2>Details</h2>
                {
                    details && <>
                        <p>{`Size: ${widthDiemension} x ${HeightDimension} pixel`}</p>
                        <p>{`Size: ${size} mb`}</p>
                    </>
                }
            </div>

            <style jsx>{styles}</style>
        </>

    )
}
