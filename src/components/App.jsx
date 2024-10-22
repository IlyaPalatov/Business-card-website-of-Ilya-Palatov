import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
            </Switch>
        </Router>
    );
};

export default App;
