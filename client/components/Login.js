import React from 'react';
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer';
import { TextField, Button, Typography } from '@material-ui/core'

const Login = (props) => {
    const { handleSubmit } = props;
    return (
        <>
        <Typography variant="h5" align='left'>Login</Typography>
        <form className='login-form' onSubmit={handleSubmit}>
            <TextField label='Username' name='username'/>
            <TextField type='password' label='Password' name='password'/>
            <Button waves='light' variant='contained' color='primary' type='submit'>Submit</Button>
        </form>
        </>
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