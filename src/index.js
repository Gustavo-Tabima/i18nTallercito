import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locals/es";
import JobsList from "./components/jobslist";

ReactDOM.render(
        <IntlProvider locale="en" >
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);


ReactDOM.render(
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
