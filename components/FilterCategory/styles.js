import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    .container {
        border-bottom: 1px solid #C2C2C2;
        margin-right: 50px;
        padding-bottom: 40px;
        background-color: #fff;
    }

    .filtersContainer {
        width: 320px;
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
        h3 {
            font-size: 34px;
            padding-left: 33px;
        }

        .container {
            margin: 0;
        }

        .filtersContainer {
            padding-left: 70px;
        }
    }
`