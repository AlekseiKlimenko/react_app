import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Clock from './components/main.component';
import Game from './components/game.component';
import React from 'react';

class router extends React.Component{
    render () {
        return(
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/'>Game</Link></li>
                            <li><Link to='/clock'>Clock</Link></li>
                            <li><Link to='/clock/4/test'>Clock</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/"  render ={()=><Game/>}/>
                        <Route exact path="/clock" component={Clock}/>
                        <Route  path="/clock/:id/:category" component={Clock}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default router;

