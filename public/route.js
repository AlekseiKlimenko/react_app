import { Router, Route, Switch } from 'react-router';
import Clock from './components/main.component';
import Game from './components/game.component';
import React from 'react';

class router extends React.Component{
    render () {
        return(
            <Router>
                <Route path="/" component={Game} />
                <Route path="/clock" component={Clock} />
            </Router>
        )
    }
}

export default router;

