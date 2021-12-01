import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-logo" to="..">Hearthstone</Link>
            </div>
          </nav>
        </>
    )
}

export default Navbar;
