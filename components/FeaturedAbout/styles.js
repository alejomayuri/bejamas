import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        max-width: 690px;
        width: 100%;
    }
    h2 {
        font-family: 'Archivo', sans-serif;
        font-size: 22px;
        font-weight: 700;
    }
    h3 {
        font-family: 'Archivo', sans-serif;
        font-size: 22px;
        font-weight: 700;
        color: #656565;
        text-transform: capitalize;
    }
    p {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #656565;
    }

    @media (max-width: ${breakpoints.mobile}) {
        h2 {
            margin-top: 30px;
        }
        h3 {
            display: none;
        }
        p {
            margin-top: 30px;
        }
    }
`
