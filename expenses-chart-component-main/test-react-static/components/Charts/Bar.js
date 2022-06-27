function Bar(_ref) {
    var day = _ref.day,
        amount = _ref.amount,
        size = _ref.size,
        active = _ref.active;


    return React.createElement(
        "div",
        { className: "bar-container" },
        React.createElement(
            "div",
            { className: active ? "bar bar__active" : "bar", style: { height: size + "%" } },
            React.createElement(
                "div",
                { className: "price" },
                "$",
                amount
            )
        ),
        React.createElement(
            "p",
            { className: "day" },
            day
        )
    );
}

export default Bar;