import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        display: flex;
        justify-content: flex-start;
        height: 40px;
        align-items: center;
        margin: 12px 0;
    }

    p {
        margin-left: 23px;
        text-transform: capitalize;
        font-size: 22px
    }
`