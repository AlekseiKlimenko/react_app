import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import VisibleContacts from './fitches/contacts/components/contactsComponents';

class router extends React.Component{
    render () {
        return(
            <BrowserRouter>
                <div>
                    {/*<nav>*/}
                        {/*<ul>*/}
                            {/*<li><NavLink exact activeStyle={{color:"green"}} to='/'>Game</NavLink></li>*/}
                            {/*<li><NavLink exact activeStyle={{color:"green"}} to='/clock'>Clock</NavLink></li>*/}
                            {/*<li><NavLink activeStyle={{color:"green"}} to='/clock/4/test'>Clock</NavLink></li>*/}
                        {/*</ul>*/}
                    {/*</nav>*/}
                    <Switch>
                        <Route exact path="/"  render ={()=><VisibleContacts/>}/>
                        <Route exact path=""/>
                        <Route  path=""/>
                        {/*<Route exact path="/clock" component={Clock}/>*/}
                        {/*<Route  path="/clock/:id/:category" render={((props)=><Clock {...props}/>)}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default router;

