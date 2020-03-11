import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';


import { About } from './About';
import  Contact  from './Contact';
import { Home } from './Home';
import {GameDikha} from './GameDikha';

import {Link} from 'react-scroll'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={GameDikha}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    );
}

export { Main };
