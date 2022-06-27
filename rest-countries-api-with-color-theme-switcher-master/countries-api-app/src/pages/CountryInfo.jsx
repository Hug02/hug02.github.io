import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from 'react-feather';
import "./CountryInfo.scss";

function CountryInfo() {
    const cca3Code = useParams().cca3;

    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${cca3Code}`)
        .then((res) => res.json())
        .then((resJSON) => {
            setData(resJSON[0]);
            setIsLoading(false);
        })
    }, []);

    const getCurrencies = () => {
        let currencies = "";
        Object.keys(data.currencies).forEach((key) => {
            currencies += data.currencies[key].name + ", ";
        });
        return currencies.slice(0, -2);
    }

    const getLanguages = () => {
        let languages = "";
        Object.keys(data.languages).forEach((key) => {
            languages += data.languages[key] + ", ";
        });
        return languages.slice(0, -2);
    }

    return (
        <main id="main-country-info" className="container">
            <div className="main-header">
                <Link to="/">
                    <div className="back-btn">
                        <ArrowLeft />
                        <span>Back</span>
                    </div>
                </Link>
            </div>
            {isLoading ? <h1>CA CHARGE FDP</h1> :
            <section id="section-country-info">
                <div className="img-wrapper">
                    <img src={data.flags.svg} alt="flag" />
                </div>
                <div className="country-description">
                    <h2>{data.name.common}</h2>
                    <div className="country-description-misc">
                        <div className="country-description-misc-left">
                            <div className="country-stats">
                                <span className="country-stats-key">Capital: </span>
                                <span className="country-stats-data">{data.capital ? data.capital[0] : "?"}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Population: </span>
                                <span className="country-stats-data">{new Intl.NumberFormat().format(data.population)}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Region: </span>
                                <span className="country-stats-data">{data.region}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Sub Region: </span>
                                <span className="country-stats-data">{data.subregion}</span>
                            </div>
                        </div>
                        <div className="country-description-misc-right">
                            <div className="country-stats">
                                <span className="country-stats-key">Top Level Domain: </span>
                                <span className="country-stats-data">{data.tld[0]}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Currency: </span>
                                <span className="country-stats-data">{getCurrencies()}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Languages: </span>
                                <span className="country-stats-data">{getLanguages()}</span>
                            </div>
                            <div className="country-stats">
                                <span className="country-stats-key">Area: </span>
                                <span className="country-stats-data">{new Intl.NumberFormat().format(data.area)} km²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </main>
    );
}

export default CountryInfo;