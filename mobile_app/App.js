import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [requisitions, setRequisitions] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [subreddit, setSubreddit] = useState('');
  
  const searchReddit = (enteredText) => {
    setRequisitions([...requisitions, {       
      searchString: searchString,
      subreddit: subreddit,
    }])
  }

  const handleSubreddit = (enteredText) => {
    setSubreddit(enteredText);
  }

  const handleSearchString = (enteredText) => {
    setSearchString(enteredText);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.h2}>Welcome to Requisition Reddit</Text>
        <Text>An app dedicated to letting you find, save, and filter Reddit posts to your liking.</Text>
        <View style={styles.login}>
          <Text style={{fontSize: 24}}>Let's get started!</Text>
          <TextInput 
            placeholder='Search String' 
            style={styles.textInput} 
            onChangeText={handleSearchString} 
            value={searchString} />
          <TextInput 
            placeholder='Subreddit' 
            style={styles.textInput} 
            onChangeText={handleSubreddit} 
            value={subreddit} />
          <Button title='Requisition Reddit' onPress={searchReddit}/>
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
  login: {
    display:'flex',
    padding: '2%',
    fontSize: 24,
    //width: '80%'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

});
