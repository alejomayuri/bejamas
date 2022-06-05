import useFeaturedProduct from "../../hooks/useFeaturedProduct"
import FeaturedHeader from "../FeaturedHeader"
import FeaturedPhoto from "../FeaturedPhoto/indedx"
import FeaturedAbout from "../FeaturedAbout"
import AlsoBuy from "../AlsoBuy"
import FeaturedDetails from "../FeaturedDetails"
import AddToCardButton from "../AddToCartButton"


import { breakpoints } from "../../styles/theme"

export default function FeaturedProduct() {

    const { featuredProduct } = useFeaturedProduct()

    return (
        <>
            <section>
                <FeaturedHeader name={featuredProduct.name} />
                <FeaturedPhoto name={featuredProduct.name} photo={featuredProduct.image} />
                <div className="mobileAddToCart">
                    <AddToCardButton productId={featuredProduct.id}>ADD TO CART</AddToCardButton>
                </div>
                <div className="container">
                    <FeaturedAbout
                        name={featuredProduct.name}
                        category={featuredProduct.category}
                        description={featuredProduct.description}
                    />
                    <div>
                        <AlsoBuy />
                        <FeaturedDetails
                            details={featuredProduct.details}
                            widthDiemension={featuredProduct.details?.dimension?.width}
                            HeightDimension={featuredProduct.details?.dimension?.height}
                            size={featuredProduct.details?.size}
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    margin-top: 50px;
                    padding-bottom: 60px;
                    border-bottom: 4px solid #E4E4E4;
                    margin-bottom: 30px;
                }
                .container {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                }

                .mobileAddToCart {
                    display: none;
                }

                @media (max-width: ${breakpoints.mobile}) {
                    section {
                        padding: 0 15px;
                        margin-top: 0;
                    }
                    
                    .container {
                        flex-direction: column;
                        margin-top: 0;
                    }

                    .mobileAddToCart {
                        display: block;
                        width: 100%;
                        margin-top: 30px;
                    }
                }
            `}
            </style>
        </>
    )
}