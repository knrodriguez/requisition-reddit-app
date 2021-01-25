import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {fetchPostsFromDb} from '../reducers/postsReducer'
import Post from './Post'

function AllPosts(props) {
    console.log('POSTS', props.posts)

    useEffect(() => {
        props.loadPosts(props.user.id);
    },[props.posts.length || 0])

    const posts = props.posts || [];
    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(post) => post.id.toString()}
                data={posts.sort((a,b) => b.id-a.id)} 
                renderItem={post => (
                <Post id={post.id} post={post} style={styles.post}/>
            )} style={styles.allPosts} />
        </View>
    );
}

const mapState = state => ({
    posts: state.posts,
    user: state.user
})

const mapDispatch = dispatch => ({
    loadPosts: (userId)=>dispatch(fetchPostsFromDb(userId))
})

export default connect(mapState, mapDispatch)(AllPosts)

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4%',
    },
    post: {
        display: 'flex',
        height: '90%',
        width:'auto'
    }
})