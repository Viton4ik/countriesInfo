import React, {useState} from "react";

import "../styles/Header.css";


function Header(props) {
    // console.log(props);
    let [count, setNewCount] = useState(0);

    const buttonHandler = () => {
        setNewCount(count + 1);
        // alert('Hello');
    };

    return(
        <header>
            This is header
            <button className={ "some-button" } onClick={ buttonHandler }>
                { props.buttonName } clicked: {count} times
            </button>
        </header>
    );
}

export default Header;
