import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import NewRequisitionForm from './NewRequisitionForm';
import {Link} from 'react-router-native'

export default function WelcomeScreen() {
 
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.h2}>Welcome to Requisition Reddit</Text>
        <Text>An app dedicated to letting you find, save, and filter Reddit posts to your liking.</Text>
        <View style={styles.newReqForm}>
          <Text style={styles.h4}>Let's get started!</Text>
          <LoginForm/>
          {/* <Link to='/posts'>
            <Text>POSTS</Text>
          </Link> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
  },
  welcomeText: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    width: '95%'
  },
  h2: {
    fontSize: 36
  },
  h4: {
    fontSize: 24
  },
  newReqForm: {
    display:'flex',
    padding: '2%',
    fontSize: 24,
  },
});
