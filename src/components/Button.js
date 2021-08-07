const Button = ({ btnTxt, btnClr }) => {
    
    return (
        <>
            <button className="btn" style={{backgroundColor:btnClr}}> {btnTxt} </button>
        </>
    )
}

export default Button;