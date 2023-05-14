import * as React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

import "../styles/Main.css";

import Countries from "./Countries";
import Alerts from "./Alerts";

function Main() {
    let alertText = <b>This is some text for alert</b>
    return(
        <main>
            <Alerts>
                <Alert variant={"primary"}>
                    { alertText }
                </Alert>
                <Alert variant={"secondary"}>
                    { alertText }
                </Alert>
                <Alert variant={"danger"}>
                    { alertText }
                </Alert>
            </Alerts>
            {/*<Alerts>{ alertText }</Alerts>*/}
            <Countries />
        </main>
    );
}

export default Main;