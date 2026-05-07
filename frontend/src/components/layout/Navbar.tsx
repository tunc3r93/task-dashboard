import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <div className="nav__mark" />
            </div>

            <div className="nav__links">
                <a href="#">Dashboard</a>
                <a href="#">Aufgaben</a>
                <a href="#">Analytics</a>
                <a href="#">Einstellungen</a>
            </div>

            <div className="nav__actions">
                <button>Anmelden</button>
            </div>
        </nav>
    );
};

export default Navbar;