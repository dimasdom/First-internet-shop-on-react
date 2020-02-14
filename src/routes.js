import {Route, Switch} from "react-router";
import Phones from "components/phones";
import React from "react";
import Phone from "phone";
import Basket from "components/basket";

export default (
    <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/phones/:id" component={Phone} exact />
        <Route path="/categories/:id" component={Phones} exact />
        <Route path="/basket" component={Basket} exact />
    </Switch>
)