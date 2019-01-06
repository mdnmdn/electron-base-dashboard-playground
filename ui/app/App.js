import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

const App = () => (
    <HashRouter>
        <Switch>
            <Route
                path="/"
                exact
                component={HomePage}    
            />
            <Route
                path="/test"            
                component={TestPage}    
            />
        </Switch>
    </HashRouter>
);

render(<App />, document.getElementById('root'));