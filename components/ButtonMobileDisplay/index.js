
export default function ButtonMobileDisplay ({ title, onClick, clear }) {
    return <>
        <button onClick={onClick}>{title}</button>

        <style jsx>{`
            button {
                width: 177px;
                height: 48px;
                border: 3px solid #000000;
                background-color: ${clear ? 'transparent' : '#000'};
                color: ${clear ? '#000' : '#fff'};
                font-weight: 500;
                font-size: 23px;
                cursor: pointer;
            }
        `}</style>
    </>
}
