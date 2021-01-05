import { connect } from 'react-redux';
import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';
import { getPostsFromReddit } from '../reducers/postsReducer';

class AllPosts extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getPostsFromReddit(userId);
    }

    render(){
        const posts = this.props.posts || [];
        console.log(posts);
        return (
            <div>
                <RequisitionForm />
                <div>
                    <h2>Posts</h2>
                    {posts.map(post => <Post post={post} />)}
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    posts: state.posts,
});

const mapDispatch = (dispatch) => ({
    getPostsFromReddit: (userId) => dispatch(getPostsFromReddit())
});

export default connect(mapState, mapDispatch)(AllPosts);