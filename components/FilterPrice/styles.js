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
        h3 {
            font-size: 34px;
            padding-left: 33px;
        }

        .container {
            margin: 0;
            height: 100vh;
            padding-bottom: 200px;
        }

        .filtersContainer {
            padding-left: 70px;
            width: 320px;
        }
    }
`