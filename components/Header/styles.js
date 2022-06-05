import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 4px solid #E4E4E4;
        padding: 33px 0;
        position: relative;
    }

    @media (max-width: ${breakpoints.mobile}) {
        img {
            width: 124px;
            margin-left: 33px;
        }
    }
`