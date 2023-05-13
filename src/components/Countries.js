import React, {useState}  from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Country from "./Country";

import "../styles/Countries.css";


//https://restcountries.com/v3.1/all

function Countries() {
    const url = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([]);

    if (!countries.length) {
        axios.get(url).then(res => {
            console.log('res', res);
            // console.log('res1', res.data[0]);
            setCountries(res.data);
        });

    }

    return(
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Number</th><th>Country</th><th>Capital</th><th>Activity</th></tr></thead>
            <tbody>
                {countries.map(country => <Country key={country.altSpellings[0]} country={country}/>)}
            </tbody>
        </Table>
    );
}

export default Countries;