import {Route, Switch} from "react-router";
import Phones from "components/phones";
import React from "react";
import Phone from "phone";

export default (
    <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/phones/:id" component={Phone} exact />
    </Switch>
)