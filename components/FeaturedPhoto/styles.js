import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        position: relative;
        width: 100%;
    }
    img {
        width: 100%;
        height: 540px;
        background: #f5f5f5;
    }
    span {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 272px;
        height: 67px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Archivo', sans-serif; 
    }

    @media (max-width: ${breakpoints.mobile}) {
        img {
            height: 239px;
        }
        span {
            width: 227px;
            font-size: 15px;
            height: 56px;
        }
    }
`