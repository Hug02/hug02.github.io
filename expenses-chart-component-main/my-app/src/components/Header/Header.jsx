import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import logo from "../../assets/images/logo.svg";
import "./Header.css";

function Header() {
    const header = useRef();

    useEffect(() => {
        gsap.from(header.current, {
            x: 1000,
            duration: 1,
            ease: "circ.out",
            autoAlpha: 0
        })
    })
    return (
        <header className="panel" ref={header}>
            <div className="left">
                <h1>My balance</h1>
                <span id="myBalance">$921.48</span>
            </div>
            <div className="right">
                <img src={logo} alt="" />
            </div>

        </header>
    );
}

export default Header;