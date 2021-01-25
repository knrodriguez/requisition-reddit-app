import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import {fetchPostsFromDb, deletePost} from '../reducers/postsReducer'
import Post from './Post'
import {FAB, Modal, TextInput, Button} from 'react-native-paper'
import {useToast} from 'react-native-fast-toast'

function AllPosts(props) {
    const [showNewReqModal, setShowNewReqModal] = useState(false)
    const [searchString, setSearchString] = useState('')
    const [subreddit, setSubreddit] = useState('')
    const toast = useToast();

    const handleDelete = (postId) => {
        props.removePost(postId)
        toast.show('Deleted post successfully')
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
                <Post id={post.id} post={post} handleDelete={handleDelete}/>
            )} style={styles.allPosts} />
            <FAB 
                style={styles.fab}
                small
                icon='plus'
                onPress={()=>setShowNewReqModal(true)}
            />
            <Modal visible={showNewReqModal} onDismiss={()=>setShowNewReqModal(false)}>
                <TextInput 
                    placeholder='Search String'
                    label='searchString'
                    value={searchString}
                    onChangeText={text => setSearchString(text)}
                />
                <TextInput 
                    placeholder='Subreddit'
                    label='subreddit'
                    value={subreddit}
                    onChangeText={text => setSubreddit(text)}
                />
                <Button mode='contained'>Add New Requisition</Button>
            </Modal>
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
        marginBottom: '4%',
        color: 'white'
    },
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: '#1e2223',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4%',
        marginTop: 43,
    }, 
    allPosts: {
        backgroundColor: '#1e2223',
        display: 'flex'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#282157'
    },
})