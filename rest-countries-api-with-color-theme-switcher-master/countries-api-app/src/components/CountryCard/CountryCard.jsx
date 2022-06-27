import "./CountryCard.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";

function CountryCard({ country }) {
    const card = useRef();
    return (
        <div className="country-card" ref={card}>
            {console.log(card.current.getBoundingClientRect())}
            <Link to={`/country/${country.cca3}`}>
            <img src={country.flags.svg} alt="flag" />
            <div className="country-card-description">
                <h2>{country.name.common}</h2>
                <div className="country-stats">
                    <span className="country-stats-key">Population: </span>
                    <span className="country-stats-data">{new Intl.NumberFormat().format(country.population)}</span>
                </div>
                <div className="country-stats">
                    <span className="country-stats-key">Region: </span>
                    <span className="country-stats-data">{country.region}</span>
                </div>
                <div className="country-stats">
                    <span className="country-stats-key">Capital: </span>
                    <span className="country-stats-data">{country.capital ? country.capital[0] : "?"}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CountryCard;