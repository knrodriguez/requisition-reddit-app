import { connect } from 'react-redux';
import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';
import { getPostsFromReddit } from '../reducers/postsReducer';

class AllRequisitions extends React.Component {
    constructor(){
        super();
        this.state({});
    }

    componentDidMount(){
        props.getPostsFromReddit();
    }


    render(){
        const posts = [];
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
    posts: state.posts
});

const mapDispatch = (dispatch) => ({
    getPostsFromReddit: () => dispatch(getPostsFromReddit())
});

export default connect(mapState, mapDispatch)(AllRequisitions);