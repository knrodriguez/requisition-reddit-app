import React, { useState }from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
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
        <View style={styles.container}>
            <TextInput 
                placeholder='Username'
                placeholderTextColor='#F8F8FF'
                style={styles.textInput} 
                onChangeText={handleUsername} 
                value={username} />
            <TextInput 
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor='#F8F8FF' 
                style={styles.textInput} 
                onChangeText={handlePassword} 
                value={password} />
            <Button title='Login' onPress={signin} style={styles.loginButton}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'

    },
    textInput: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: 'white',
        fontSize: 16,
        marginBottom: '3%'
    },
    loginButton: {
    }
})

const mapState = state => ({
    user: state.user
})

const mapDispatch = dispatch => ({
    login: (credentials) => dispatch(login(credentials)) 
})

export default connect(mapState, mapDispatch)(LoginForm)