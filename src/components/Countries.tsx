import * as React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Country from "./Country";

import "../styles/Countries.css";


//https://restcountries.com/v3.1/all - API

function Countries() {
    const url = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = React.useState([]);

    if (!countries.length) {
        axios.get(url).then(res => {
            console.log('res', res);
            // console.log('res1', res.altSpellings);
            setCountries(res.data);
        });

    }

    return(
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Number</th><th>Country</th><th>Label</th><th>Capital</th><th>Activity</th></tr></thead>
            <tbody>
            {/* 1 option */}
            {/*    {countries.map(country => <Country key={country.altSpellings[0]} country={country}/>)}*/}
            {/* 2 option */}
            {/*    {countries.map(country => country.capital ? <Country key={country.altSpellings[0]}*/}
                {countries.map((country, num) => country.capital ? <Country key={country.altSpellings[0]}
                     map={country.maps.openStreetMaps}
                     num={num}
                     name={country.name.common}
                     label={country.altSpellings}
                     capital={country.capital}/> : <Country key={country.altSpellings[0]}
                                                            map={country.maps.openStreetMaps}
                                                            num={num}
                                                            name={country.name.common}
                                                            label={country.altSpellings}/>)}
            </tbody>
        </Table>
    );
}

export default Countries;