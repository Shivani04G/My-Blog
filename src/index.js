import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import News from "./News";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Travel from "./Travel";
import Places from "./Places";
import Cuisines from "./Cuisines";
import "./index.css";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/travel" component={Travel} />
            <Route path="/places" component={Places} />
            <Route path="/cuisines" component={Cuisines} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);

ReactDOM.render(
    <News />,
    document.getElementById("ajax-data")
);

