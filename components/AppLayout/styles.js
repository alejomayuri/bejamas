import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    main {
        background-color: #f5f5f5;
        margin: 0 auto;
        max-width: 1290px;
        width: 100%;
        padding: 0 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        main {
            padding: 0;
        }
    }
`