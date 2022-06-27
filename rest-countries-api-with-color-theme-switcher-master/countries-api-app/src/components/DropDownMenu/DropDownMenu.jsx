import "./DropDownMenu.scss";
import { ArrowDown } from 'react-feather';
import { useState } from 'react';

function DropDownMenu({ filter, setFilter }) {
    const [ active, setActive ] = useState("");

    const toggleActive = () => {
        if (active === "")
            setActive("active");
        else
            setActive("");
    }

    const changeFilter = (e) => {
        setFilter(e.target.innerText);
        toggleActive();
    }

    return (
        <div className={`dropdown-wrapper ${active}`}>
            <div className="current-value" onClick={toggleActive}>
                <span>{(filter === "All" ? "Filter by Region" : filter)}</span>
                <ArrowDown></ArrowDown>
            </div>
            <ul>
                <li onClick={changeFilter}>All</li>
                <li onClick={changeFilter}>Africa</li>
                <li onClick={changeFilter}>Americas</li>
                <li onClick={changeFilter}>Asia</li>
                <li onClick={changeFilter}>Europe</li>
                <li onClick={changeFilter}>Oceania</li>
            </ul>
        </div>
    )
}

export default DropDownMenu;