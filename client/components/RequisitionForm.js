import React from 'react';
import { connect } from 'react-redux';
import cron from 'cron';
import { addRequisition } from '../reducers/requisitionReducer';
import { getRequisitions } from '../reducers/allRequisitionsReducer'
import { getPostsFromReddit } from '../reducers/postsReducer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class RequisitionForm extends React.Component {
    constructor(){
        super();
        this.state = {
            jobs: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createSchedule = this.createSchedule.bind(this);
    }

    componentDidMount(){
        this.props.getRequisitions();
    }

    componentDidUpdate(prevState, prevProps) {
        if(prevProps.allRequisitions !== this.props.allRequisitions){
            const jobs = this.props.allRequisitions.map((req) => {
                const newJob = this.createSchedule(req.id);
                newJob.start();
                return newJob;
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        try {
            const target = event.target;
            const newRequisition = {
                searchString: target.searchString.value,
                subReddits:  target.subReddits.value.split(','),
                userId: this.props.user.id
            }
            document.getElementById('searchString').value = '';
            document.getElementById('subReddits').value = '';
            this.props.addRequisition(newRequisition)
                .then(() => this.createSchedule(this.props.requisition.id).start());
        } catch (error) {
            console.error('Cannot submit new requisition', error.stack);
        }
    }

    createSchedule(reqId){
        const { requisition, getPostsFromReddit } = this.props;
        return cron.job({
            cronTime: '*/2 * * * *',
            onTick: function() {
                console.log('running every 2 minutes for reqId', reqId, requisition.searchString);
                getPostsFromReddit(reqId);
            },
        })
    }
    
    render(){
        return(
            <form className='requisitionForm' onSubmit={this.handleSubmit} noValidate>
                <TextField id='searchString' label='Search String' name='searchString'/>
                <TextField id='subReddits'label='Subreddit(s)' name='subReddits'/>
                <Button waves='light' variant='contained' color='primary' type='submit'>Submit</Button>
            </form>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    requisition: state.requisition,
    allRequisitions: state.allRequisitions
})

const mapDispatch = (dispatch) => ({
    addRequisition: (requisition) => dispatch(addRequisition(requisition)),
    getPostsFromReddit: (reqId) => dispatch(getPostsFromReddit(reqId)),
    getRequisitions: () => dispatch(getRequisitions())
})
export default connect(mapState,mapDispatch)(RequisitionForm);