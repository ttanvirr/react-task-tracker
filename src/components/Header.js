import Button from "./Button"

const Header = () => {
    
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button 
                btnTxt="Add" 
                btnClr="Green"
            />
        </div>
    )
}

export default Header;