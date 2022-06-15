function Bar({ day, amount, size, active }) {

    return (
        <div className="bar-container">
            <div className={active ? "bar bar__active" : "bar"} style={{height: size+"%"}}>
                <div className="price">${amount}</div>
            </div>
            <p className="day">{day}</p>
        </div>
    )
}

export default Bar;