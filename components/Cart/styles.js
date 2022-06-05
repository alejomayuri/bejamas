import css from 'styled-jsx/css';

import { breakpoints } from "../../styles/theme"

export default css`
    button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        position: relative;
    }
    .number {
        width: 20px;
        height: 20px;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        position: absolute;
        bottom: -10px;
        right: -10px;
    }

    .open__cart {
        width: 350px;
        height: 350px;
        background-color: #fff;
        position: absolute;
        right: 0;
        z-index: 999;
        top: 125px;
        border: 4px solid #E4E4E4;
    }

    .container {
        position: relative;
        overflow: hidden;
        height: 100%;
    }

    .cart__container {
        overflow-y: scroll;
        height: 100%;
        padding: 0 24px;
        scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
        scrollbar-width: none;
        padding-bottom: 100px;
        position: relative;
        padding-top: 70px;
    }

    .cart__header {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: end;
        position: absolute;
        width: 100%;
        background: #fff;
        left: 0;
        z-index: 999;
    }

    .cart__header button {
        margin-right: 25px;
    }

    .cart__element {
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .cart__element p {
        font-weight: 700;
        font-size: 20px;
    }

    .cart__element span {
        position: initial;
        color: #656565;
        font-weight: 400;
        font-size: 29px;
        background: transparent;
        display: block;
    }

    .cart__element img {
        width: 100px;
    }

    .cart__text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100px;
    }

    .cart__text p {
        margin: 0;
    }

    .cart__clear__button {
        height: 100px;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
    }

    .cart__clear__button__container {
        width: calc(100% - 50px);
        height: 100%;
        margin: 0 auto;
        border-top: 1px solid #000;
        display: flex;
        align-items: center;
    }

    .cart__clear__button__container button {
        width: 100%;
        height: 55px;
        background: #FFFFFF;
        border: 3px solid #000000;
        font-weight: 500;
        font-size: 23px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        img {
            width: 32px;
        }
        
        button {
            margin-right: 33px;
        }

        .open__cart {
            top: 100px;
        }
    }
`