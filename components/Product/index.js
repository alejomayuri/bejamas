
export default function Product({ img, category, name, price }) {
    return (
        <>
            <div>
                <img src={img} />
                <p>{category}</p>
                <p>{name}</p>
                <span>{price}</span>
            </div>

            <style jsx>{`
                img {
                    width: 280px;
                    height: 400px;
                }
            `}</style>
        </>
    )
}