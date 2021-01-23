import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import {NewRequisitionForm} from './NewRequisitionForm';

export default function NewRequisitionForm() {
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
