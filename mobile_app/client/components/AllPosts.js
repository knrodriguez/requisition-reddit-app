import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {fetchPostsFromDb} from '../reducers/postsReducer'
import Post from './Post'
function AllPosts(props) {

    useEffect(() => {
        props.loadPosts();
    },[props.posts.length])

    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(post) => post.id.toString()}
                data={props.posts.sort((a,b) => b.id - a.id)} 
                renderItem={post => (
                <Post id={post.id} post={post} style={styles.post}/>
            )} style={styles.allPosts} />
        </View>
    );
}

const mapState = state => ({
    posts: state.posts
})

const mapDispatch = dispatch => ({
    loadPosts: ()=>dispatch(fetchPostsFromDb())
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
        height: '90px',
        width:'auto'
    }
})