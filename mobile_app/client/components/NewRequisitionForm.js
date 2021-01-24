import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function NewRequisitionForm() {
    const [requisitions, setRequisitions] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [subreddit, setSubreddit] = useState('');
    
    const searchReddit = (enteredText) => {
      setRequisitions([...requisitions, {       
        searchString: searchString,
        subreddit: subreddit,
      }])
      console.log(requisitions);
    }
  
    const handleSubreddit = (enteredText) => {
      setSubreddit(enteredText);
    }
  
    const handleSearchString = (enteredText) => {
      setSearchString(enteredText);
    }

    return(
        <View>
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
    )
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})
    
