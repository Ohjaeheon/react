import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./APP.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;