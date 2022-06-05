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

    label {
        margin-left: 23px;
        text-transform: capitalize;
        font-size: 22px
    }

    @media (max-width: ${breakpoints.mobile}) {
        [type="checkbox"] {display: none}

        label {
            font-size: 28px;
            display: flex;
            align-items: center;
        }

        label:before {
            content: '';
            border: solid 4px #000;
            border-radius: 0;
            width: 29px;
            height: 29px;
            position: absolute;
            left: 36px;
        }

        [type="checkbox"]:checked + label:before {
            content: "✔️";
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`