import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    .container {
        margin-bottom: 50px;
        position: relative;
    }

    .img__container {
        width: 280px;
        height: 400px;
        position: relative;
    }

    .img__container:hover .add__cart {
        opacity: 1;
        visibility: visible;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .add__cart {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 47px;
        margin: 0;
        background: red;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    p {
        font-size: 22px;
        color: #656565;
        text-transform: capitalize;
        margin: 10px 0;
    }

    h3 {
        font-weight: 700;
        font-size: 34px;
        margin: 10px 0;
    }

    span {
        font-weight: 400;
        font-size: 29px;
        line-height: 32px;
        color: #656565;
    }

    .bestseller {
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
    }
    
    .bestseller span {
        font-size: 20px;
        margin-left: 20px;
        color: #000;
        margin-right: 10px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        .container{
            width: 362px;
            margin: 0 auto;
            margin-bottom: 30px;
        }

        img {
            width: 100%;
            height: 100%;
        }

        .bestseller {
            margin: 0;
            width: 170px;
            height: 40px;
            display: flex;
            align-items: center;
        }

        .img__container {
            width: 100%;
            height: auto;
        }

        p {
            font-weight: 700;
            font-size: 22px;
            margin-top: 20px;
        }
    }
`