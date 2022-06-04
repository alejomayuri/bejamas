import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    .container {
        margin-right: 50px;
        padding-bottom: 40px;
        background-color: #fff;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    h3 {
        font-size: 22px;
        font-weight: 700;
    }

    @media (max-width: ${breakpoints.mobile}) {
        .container {
            margin: 0;
            height: 100vh;
        }
    }
`