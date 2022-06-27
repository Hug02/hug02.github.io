function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Charts.css";
import Bar from "./Bar";

var datas = require("../../assets/data.json");

function Charts() {
    var maxAmount = Math.max.apply(Math, _toConsumableArray(datas.map(function (data) {
        return data.amount;
    })));
    var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var today = new Date().getDay();
    var charts = useRef();

    useEffect(function () {
        var tl = gsap.timeline();
        tl.from(charts.current, { autoAlpha: 0, duration: 0 });
        tl.from(charts.current, {
            x: -1000,
            duration: 1,
            ease: "circ.out"
        });
    });
    return React.createElement(
        "div",
        { className: "panel charts", ref: charts },
        React.createElement(
            "h1",
            null,
            "Spending - Last 7 days"
        ),
        React.createElement(
            "div",
            { className: "bars" },
            datas.map(function (data) {
                return React.createElement(Bar, { key: data.day, day: data.day, amount: data.amount, size: data.amount / maxAmount * 100, active: days[today] === data.day ? true : false });
            })
        ),
        React.createElement("div", { className: "separator" }),
        React.createElement(
            "footer",
            null,
            React.createElement(
                "div",
                { className: "total" },
                React.createElement(
                    "p",
                    null,
                    "Total this month"
                ),
                React.createElement(
                    "em",
                    null,
                    "$478.33"
                )
            ),
            React.createElement(
                "div",
                { className: "increase" },
                React.createElement(
                    "em",
                    null,
                    "+2.4%"
                ),
                React.createElement(
                    "p",
                    null,
                    "from last month"
                )
            )
        )
    );
}

export default Charts;