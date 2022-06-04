import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    div {
        display: flex;
        align-items: center;
        width: 215px;
    }
    
    button {
        cursor: pointer;
        width: 30px;
        height: 20px;
        border: none;
        background: transparent;
    }

    p {
        font-size: 22px;
        color: #9b9b9b;
    }

    select {
        font-family: "Archivo",sans-serif;
        height: 30px;
        font-size: 22px;
        font-weight: 400;
        border: none;
        background-color: transparent;
        background-image: url('/select.png');
        background-repeat: no-repeat;
        background-position: right center;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        width: 85px;
        margin-left: 15px;
        padding-top: 5px;
        cursor: pointer;
    }

    .mobile__menu {
        display: none
    }

    @media (max-width: ${breakpoints.mobile}) {
        div {
            display: none;
        }

        .mobile__menu {
            display: flex;
            justify-content: end;
            width: 80px;
        }

        .mobile__menu button {
            height: 30px;
            width: 40px;
            margin-right: 22px;
        }
    }
`