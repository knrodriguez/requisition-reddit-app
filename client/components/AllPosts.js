import React from 'react';
import RequisitionForm from './RequisitionForm';
import Post from './Post';

class AllRequisitions extends React.Component {
    render(){
        const posts = [];
        return (
            <div>
                <RequisitionForm />
                <div>
                    {posts.map(post => <Post post={post} />)}
                </div>
            </div>
        );
    }
}
export default AllRequisitions;