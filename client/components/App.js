import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import AllPosts from './AllPosts';
import Settings from './Settings';
import Navbar from './Navbar';
import { Landing } from './Landing';
import { getMe } from '../reducers/userReducer';


const App = withRouter( class extends React.Component {

    async componentDidMount(){
        console.log('inside app component did mount');
        this.props.getUser();
    }

    render(){
        console.log('inside app render');
        const { history, user } = this.props;  
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/posts' component={AllPosts} />
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/' component={Landing} />
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