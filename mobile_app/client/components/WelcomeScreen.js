import React, { useState }from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, ScrollView, TextInput, ImageBackground } from 'react-native';
import {Link} from 'react-router-native'
import LoginForm from './LoginForm'
import StatusBar from './StatusBar'
export default function WelcomeScreen() {
 
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={43}>
        <StatusBar />
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/space-background.jpg')} style={styles.image}>
          <View style={styles.welcomeText}>
            <Text style={styles.h2}>Welcome to Requisition Reddit</Text>
            <Text style={styles.subtitle}>An app dedicated to letting you find, save, and filter Reddit posts to your liking.</Text>
            <View style={styles.loginForm}>
              <LoginForm/>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexShrink: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '95%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    // marginTop: 43 
  },
  welcomeText: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  h2: {
    fontSize: 46,
    color: '#EEEEFF',
    textShadowColor: 'black',
    textShadowRadius: 7,
    textAlign: 'center',
    marginBottom: '5%'
  },
  subtitle:{
    color: '#EEEEFF',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 10,
    marginBottom: '4%',
    fontSize: 18
  },
  h4: {
    fontSize: 24,
    color: '#EEEEFF',
    textShadowColor: 'black',
    textShadowRadius: 7,
    textAlign: 'center'
  },
  loginForm: {
    display:'flex',
    padding: '2%',
    fontSize: 24,
    marginBottom: '20%',
    width: '60%',
  },
});
