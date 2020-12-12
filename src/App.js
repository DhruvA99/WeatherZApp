import "./App.css";
import React from "react";
import Home from "./container/Home/Home";
import { Route, Switch } from "react-router-dom";
import WeatherView from "./container/WeatherView/WeatherView";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/weather" exact component={WeatherView} />
      </Switch>
    </div>
  );
}

export default App;
