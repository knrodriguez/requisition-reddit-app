import React from 'react';
import { Route, Switch} from 'react-router-dom'
import AllRequisitions from './AllPosts';
import Settings from './Settings';
import Navbar from './Navbar';
import Landing from './Landing'


class App extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/requisitions' component={AllRequisitions} />
                        <Route exact path='/settings' component={Settings} />
                    </Switch>
            </div>
        )
    }
}

export default App;