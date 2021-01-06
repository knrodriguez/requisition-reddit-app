import { connect } from 'react-redux';
import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';
import { getPostsFromDb, getPostsFromReddit } from '../reducers/postsReducer';

class AllPosts extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        const { user, getPostsFromDb } = this.props;
        if(user.id){
            getPostsFromDb(user.id).then(() => this.setState({isLoading:false})); //hardcoding userId = 1
        } 
    }

    render(){
        let { user, posts, history } = this.props;
        posts = posts || [];
        return (
            <div>
                {!user.id ? history.push('/'): (
                <div>
                    <RequisitionForm />
                    <div>
                        <h2>Posts</h2>
                        {posts.map(post => 
                            <Post key={post.id} post={post} />)}
                    </div>
                </div>
                )}
            </div>   
        );
    }
}

const mapState = (state, redirect) => ({
    posts: state.posts,
    user: state.user,
});

const mapDispatch = (dispatch) => ({
    getPostsFromReddit: (reqId) => dispatch(getPostsFromReddit(reqId)),
    getPostsFromDb: (userId) => dispatch(getPostsFromDb(userId)),
});

export default connect(mapState, mapDispatch)(AllPosts);