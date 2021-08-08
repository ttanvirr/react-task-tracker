import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({toggleForm, toggleAddBtn}) => {
    const location=useLocation();
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            {location.pathname === "/" && <Button
                btnTxt={toggleAddBtn ? "Close" : "Add"}
                btnClr={toggleAddBtn ? "Crimson" : "Green"}
                btnAction = {toggleForm}
            />}
        </div>
    )
}

export default Header; 