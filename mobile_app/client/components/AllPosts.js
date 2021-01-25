import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {fetchPostsFromDb, deletePost} from '../reducers/postsReducer'
import Post from './Post'


function AllPosts(props) {

    const handleDelete = (postId) => {
        props.removePost(postId)
    }

    useEffect(() => {
        props.loadPosts(props.user.id);
    },[props.posts.length || 0])

    const posts = props.posts || [];
    return(
        <View style={styles.container}>
            <Text style={styles.header}>My Posts</Text>
            <FlatList 
                keyExtractor={(post) => post.id.toString()}
                data={posts.sort((a,b) => b.id-a.id)} 
                renderItem={post => (
                <Post id={post.id} post={post} handleDelete={handleDelete} />
            )} style={styles.allPosts} />
        </View>
    );
}

const mapState = state => ({
    posts: state.posts,
    user: state.user
})

const mapDispatch = dispatch => ({
    loadPosts: (userId) => dispatch(fetchPostsFromDb(userId)),
    removePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapState, mapDispatch)(AllPosts)

const styles = StyleSheet.create({
    header:{
        fontSize: 24,
        marginTop: 30,
        marginBottom: '4%'
    },
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4%',
    }
})