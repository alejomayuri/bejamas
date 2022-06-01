import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #000;
        padding: 33px 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        img {
            width: 124px;
        }
    }
`