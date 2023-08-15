import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/add-card"> Add Card </NavLink>
        </nav>
    );
}

export default Navbar;