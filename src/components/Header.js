import Button from "./Button"

const Header = ({toggleForm, toggleAddBtn}) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button 
                btnTxt={toggleAddBtn ? "Close" : "Add"}
                btnClr={toggleAddBtn ? "Crimson" : "Green"}
                btnAction = {toggleForm}
            />
        </div>
    )
}

export default Header;