import React from "react";
import ReactDOM from "react-dom";

import "./index.css"
import StartApp from "./components/startApp.js"
import Board from "./components/board.js"



ReactDOM.render(
    <>
        <div className="container">
            <StartApp/>
            <Board/>
        </div>
    </>,
    document.getElementById("root")
);

