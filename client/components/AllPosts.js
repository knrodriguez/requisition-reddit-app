import { connect } from 'react-redux';
import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';
import { getPostsFromDb, getPostsFromReddit } from '../reducers/postsReducer';
import { Redirect } from 'react-router-dom';

class AllPosts extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getPostsFromDb(1); //hardcoding userId = 1
    }

    render(){
        let { user, posts } = this.props;
        if(!user.id){
            return <Redirect to='/' />
        }
        posts = posts || [];
        return (
            <div>
                <RequisitionForm />
                <div>
                    <h2>Posts</h2>
                    {posts.map(post => 
                        <Post key={post.id} post={post} />)}
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    posts: state.posts,
    user: state.user
});

const mapDispatch = (dispatch) => ({
    getPostsFromReddit: (reqId) => dispatch(getPostsFromReddit(reqId)),
    getPostsFromDb: (userId) => dispatch(getPostsFromDb(userId))

});

export default connect(mapState, mapDispatch)(AllPosts);