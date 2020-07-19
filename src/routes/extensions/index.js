import React from "react";
import {Route, Switch} from "react-router-dom";

import Map from "./map";
import Charts from "./charts";
import Calendar from "./calendar";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/map`} component={Map}/>
    <Route path={`${match.url}/chart`} component={Charts}/>
    <Route path={`${match.url}/calendar`} component={Calendar}/>
  </Switch>
);

export default Main;
