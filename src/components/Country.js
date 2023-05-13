import React, {useState}  from "react";
import Button from "react-bootstrap/Button";

import "../styles/Country.css";

function Country(props) {
    let number = 0;
    const [selected, changeSelected] = useState(false);

    return(
        <tr className={ selected ? "selected-country": ""}>
            <td>{ number++ }</td>
            <td>{ props.country.altSpellings[0] }, { props.country.altSpellings[1] }, { props.country.altSpellings[2] }</td>
            <td>{ props.country.capital }</td>
            <td>
                { !selected ?
                    <Button variant="success" onClick={() => changeSelected(true)}>Select</Button>:
                    <Button variant="danger" onClick={() => changeSelected(false)}>Cancel</Button>
                }
            </td>
        </tr>
    );
}

export default Country;