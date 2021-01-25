import React, { useState }from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {login} from '../reducers/userReducer'
import {Redirect} from 'react-router-native'

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (enteredText) => {
      setUsername(enteredText);
    }
  
    const handlePassword = (enteredText) => {
      setPassword(enteredText);
    }

    const signin = () => {
        props.login({
            username: username, 
            password: password
        })
    }
    
    if(props.user.id) return <Redirect to='/posts' />;

    return(
        <View>
            <TextInput 
                placeholder='Username' 
                style={styles.textInput} 
                onChangeText={handleUsername} 
                value={username} />
            <TextInput 
                placeholder='Password' 
                style={styles.textInput} 
                onChangeText={handlePassword} 
                value={password} />
            <Button title='Login' onPress={signin}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})

const mapState = state => ({
    user: state.user
})

const mapDispatch = dispatch => ({
    login: (credentials) => dispatch(login(credentials)) 
})

export default connect(mapState, mapDispatch)(LoginForm)