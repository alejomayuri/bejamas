import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        position: relative;
    }
    span {
        width: 20px;
        height: 20px;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        position: absolute;
        bottom: -10px;
        right: -10px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        img {
            width: 32px;
        }
    }
`