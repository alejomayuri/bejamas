import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;
        text-align: right;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        text-align: right;
        color: #656565;
    }

    @media (max-width: ${breakpoints.mobile}) {
        div {
            margin-top: 40px;
        }

        h2 {
            text-align: left;
        }

        p {
            text-align: left;
            font-size: 22px;
        }
    }
`