import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        margin-bottom: 50px;
        position: relative;
    }

    img {
        width: 280px;
        height: 400px;
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
        div{
            width: 362px;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        img {
            width: 100%;
            height: 502px;
        }
        .bestseller {
            margin: 0;
            width: 170px;
            height: 40px;
            display: flex;
            align-items: center;
        }
    }
`