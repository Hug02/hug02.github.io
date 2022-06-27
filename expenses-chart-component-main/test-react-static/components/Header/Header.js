import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import logo from "../../assets/images/logo.svg";
import "./Header.css";

function Header() {
    var header = useRef();

    useEffect(function () {
        gsap.from(header.current, {
            x: 1000,
            duration: 1,
            ease: "circ.out",
            autoAlpha: 0
        });
    });
    return React.createElement(
        "header",
        { className: "panel", ref: header },
        React.createElement(
            "div",
            { className: "left" },
            React.createElement(
                "h1",
                null,
                "My balance"
            ),
            React.createElement(
                "span",
                { id: "myBalance" },
                "$921.48"
            )
        ),
        React.createElement(
            "div",
            { className: "right" },
            React.createElement("img", { src: logo, alt: "" })
        )
    );
}

export default Header;