import React, {useState}  from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import "../styles/Country.css";
let number = 1;
function Country(props) {
    // let number = 0;
    const [selected, changeSelected] = useState(false);


    return(
        <tr className={ selected ? "selected-country": ""}>
            {/*<td>{ number++ }</td>*/}
            <td>{ props.num + 1 }</td>
        {/* old option */}
            {/*<td>{ props.country.altSpellings[1] }, { props.country.altSpellings[2] } ({ props.country.altSpellings[0] })</td>*/}
            {/*    <td>{ props.country.altSpellings.slice(1).join('/') }</td>*/}
        {/* 1 option */}
        {/*    <td>{ props.country.name.common }</td>*/}
        {/*    <td>{ props.country.altSpellings[0] }</td>*/}
        {/*    <td>{ props.country.capital }</td>*/}
        {/* 2 option */}
            <td>{ props.name }</td>
            <td>{ props.label[0] }</td>
            <td>{ props.capital }</td>
            <td>
                { !selected ?
                    <a href={ props.map } target="_blank">
                    <Button variant="success" onClick={() => changeSelected(true)}>Select</Button>
                    </a>:
                    <Button variant="danger" onClick={() => changeSelected(false)}>Cancel</Button>
                }
            </td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "Not Avaliable",
    name: "N/A"
}

// data validation. Development mode ONLY!
// Country.propTypes = {
//     country: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.array
//     ])
// };

export default Country;