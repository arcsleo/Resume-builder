import React from 'react';
import { MainContainer } from './mainContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/Creation" 
                render={(props) => (
                <MainContainer {...props} isDisable={false} />
                )} />
            <Route exact path="/">
                <Redirect to="/Creation" />
            </Route>
            <Route exact path="/View"
                render={(props) => (
                <MainContainer {...props} isDisable={true} />
                )} />
        </Switch>
    );
};
