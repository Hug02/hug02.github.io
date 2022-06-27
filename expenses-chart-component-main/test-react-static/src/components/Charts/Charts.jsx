import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Charts.css";
import Bar from "./Bar";

const datas = require("../../assets/data.json");

function Charts() {
    const maxAmount = Math.max(...datas.map((data) => (data.amount)));
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date().getDay();
    const charts = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(charts.current, {autoAlpha: 0, duration: 0});
        tl.from(charts.current, {
            x: -1000,
            duration: 1,
            ease: "circ.out"
        })
    });
    return (
        <div className="panel charts" ref={charts}>
            <h1>Spending - Last 7 days</h1>
            <div className="bars">
                {datas.map((data => {
                    return (<Bar key={data.day} day={data.day} amount={data.amount} size={(data.amount / maxAmount)*100} active={(days[today] === data.day) ? true : false} />)
                }))}
            </div>
            <div className="separator"></div>
            <footer>
                <div className="total">
                    <p>Total this month</p>
                    <em>$478.33</em>
                </div>
                <div className="increase">
                    <em>+2.4%</em>
                    <p>from last month</p>
                </div>
            </footer>
        </div>
    )
}


export default Charts;