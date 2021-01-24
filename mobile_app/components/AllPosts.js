import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    return(
        <View style={styles.screen}>
            <ScrollView style={styles.allPosts}>
                {posts.map(post => <Post id={}/>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {

    },
})