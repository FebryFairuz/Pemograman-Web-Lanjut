import React, {Suspense} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import Dashboard from "../module/page/dashboard/Dashboard";
import Profile from "../module/page/profile";
import Chat from "../module/page/Chat";

export function RouteApp() {
    return (
        <Suspense fallback={<h3>Loading..</h3>}>
            <Route path="/" component={Dashboard} exact />
            <Route path="/home" component={Dashboard}/>
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Chat} />
        </Suspense>
    )
}

export default RouteApp;