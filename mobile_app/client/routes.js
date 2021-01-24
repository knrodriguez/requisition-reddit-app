import React from 'react';
import {Route, Switch} from 'react-router-native'
import {AllPosts, WelcomeScreen} from './components'
//import WelcomeScreen from './components/WelcomeScreen'

export default function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={WelcomeScreen} />
            <Route exact path='/posts' component={AllPosts} />
        </Switch>
    )
}