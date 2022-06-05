import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
   header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    div {
        width: 257px;
    }
    h1 {
        font-size: 32px;
        font-weight: 700;
        line-height: 34.82px;
        font-family: 'Archivo', sans-serif;
    }

    @media (max-width: ${breakpoints.mobile}) {
        div {
            display: none;
        }
    }
`