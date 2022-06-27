import "./Home.scss";
import { Search } from 'react-feather';
import { useState, useEffect } from "react";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";
import CountryCard from "../components/CountryCard/CountryCard";

function Home() {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((resJSON) => {
            setData(resJSON);
            setIsLoading(false);
        })
    }, []);

    const [ regionFilter, setRegionFilter ] = useState("All");
    const [ searchFilter, setSearchFilter ] = useState("");

    const searchCountries = (e) => {
        setSearchFilter(e.target.value);
    }

    return (
        <main id="main-home" className="container">
            <div className="main-header">
                <div className="search-bar">
                    <Search />
                    <input type="text" placeholder="Search for a country..." onChange={searchCountries}/>
                </div>
                <DropDownMenu filter={regionFilter} setFilter={setRegionFilter}/>
            </div>
            <section>
                {isLoading ? <h1>CA CHARGE FDP</h1> :
                    data.map((c) => {
                        const re = new RegExp(`\\b(${searchFilter})\\w*`, "gi");
                        if (regionFilter === "All") {
                            if (searchFilter === "" || re.test(c.name.common))
                                return <CountryCard country={c} key={c.cca3}/>;
                        }
                        else if (regionFilter === c.region) {
                            if (searchFilter === "" || re.test(c.name.common))
                                return <CountryCard country={c} key={c.cca3}/>;
                        }
                        else
                            return null;
                    })
                }
            </section>
        </main>
    )
}

export default Home;