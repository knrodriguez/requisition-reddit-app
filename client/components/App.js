import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter} from 'react-router-dom'
import AllPosts from './AllPosts';
import Settings from './Settings';
import Navbar from './Navbar';
import { Landing } from './Landing';
import { NotFound } from './NotFound';
import { getMe } from '../reducers/userReducer';

const App = withRouter( class extends React.Component {

    async componentDidMount(){
        this.props.getUser();
    }

    render(){
        const { history, user } = this.props; 
        return (
            <div>
                <Navbar />
                <Switch>
                    { user.id && <Route exact path='/posts' component={AllPosts} /> }
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/' component={Landing} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
})

const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => ({
    getUser: () => dispatch(getMe())
})

export default connect(mapState, mapDispatch)(App);