import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
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
  }
});
