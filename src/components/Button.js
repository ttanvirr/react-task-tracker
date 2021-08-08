const Button = ({ btnTxt, btnClr, btnAction }) => {
    
    return (
        <>
            <button 
                className="btn" 
                style={{backgroundColor:btnClr}}
                onClick={btnAction}    
            > 
                    {btnTxt} 
                </button>
        </>
    )
}

export default Button;