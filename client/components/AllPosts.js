import { connect } from 'react-redux';
import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';
import { getPostsFromDb, getPostsFromReddit } from '../reducers/postsReducer';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { Typography } from '@material-ui/core';

class AllPosts extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
        this.getUsersPosts = this.getUsersPosts.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.getUsersPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.user !== this.props.user){
            this.getUsersPosts();
        }
    }

    getUsersPosts(){
        const { user, getPostsFromDb } = this.props;
        if(user.id){
            getPostsFromDb(user.id)
                .then(() => this.setState({isLoading:false}));
        } 
    }

    handleClick(event) {
        const anchor = document.getElementById('navbar');
        console.log(anchor);
        if(anchor){
            anchor.scrollIntoView();
        }
    }

    render(){
        let { posts } = this.props;
        posts = posts.sort((a,b) => b.id - a.id) || [];
        return (
            <div>
                <RequisitionForm />
                <div className='postBlock'>
                    <Typography variant='h3'>Posts</Typography>
                    <div className='posts'>
                    {posts.map(post => 
                        <Post key={post.id} post={post} />)}
                    </div>
                </div>
                <Fab className='fab' onClick={this.handleClick}>
                    <NavigationIcon/>
                </Fab>
            </div>   
        );
    }
}

const mapState = (state) => ({
    posts: state.posts,
    user: state.user,
});

const mapDispatch = (dispatch) => ({
    getPostsFromReddit: (reqId) => dispatch(getPostsFromReddit(reqId)),
    getPostsFromDb: (userId) => dispatch(getPostsFromDb(userId)),
});

export default connect(mapState, mapDispatch)(AllPosts);