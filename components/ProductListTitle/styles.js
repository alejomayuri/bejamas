import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        width: auto;
        display: flex;
        align-items: center;
    }
    h2, span, p {
        font-size: 30px;
        font-weight: 700;
        font-family: "Archivo",sans-serif;
    }
    h2{
        margin-right: 10px;
    }
    p {
        margin-left: 10px;
        color: #9B9B9B;
        font-weight: 400;
    }
`