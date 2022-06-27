import "./Header.css";
import { Moon } from 'react-feather';
import { Link } from 'react-router-dom';

function Header({ theme, setTheme }) {

    const switchTheme = () => {
        const newTheme = (theme === "light") ? "dark" : "light";
        setTheme(newTheme);
    }
    return (
        <header className="container">
            <Link to={"/"}>Where in the world?</Link>
            <div className="dark-mode-toggle" onClick={switchTheme}>
                <Moon />
                <span>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header;