import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    .pagination {
        margin: 60px auto;
        display: flex;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 29px;
        font-family: "Archivo",sans-serif;
        color: #B4B4B4;
        cursor: pointer;
        margin: 0 7px;
    }

    button.active {
        color: #000;
    }
`