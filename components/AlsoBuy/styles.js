import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    h2 {
        line-height: 24px;
        text-align: right;
    }

    img {
        margin-left: 30px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        .imgContainer {
            margin-top: 40px;
        }
        h2 {
            text-align: left;
        }
        img {
            margin: 0 12px;
            width: 97px;
        }
    }
`