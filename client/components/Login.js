import React from 'react';
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer';

const Login = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' />
            <input type='password' name='password' />
            <button type='submit'>Submit</button>
        </form>
    )
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        async handleSubmit(event){
            try {
                event.preventDefault();
                const credentials = {
                    username: event.target.username.value,
                    password: event.target.password.value
                }
                await dispatch(login(credentials)); 
                ownProps.history.push('/posts');
            } catch (error) {
                console.error(error);
            } 
        }
    }
}

export default connect(null, mapDispatch)(Login);