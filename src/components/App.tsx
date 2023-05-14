import * as React from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <React.Fragment>
            {/*<Header></Header> - or like that */}
            <Header buttonName = {'button'} />
            <Main />
        </React.Fragment>
    );
}

export default App;