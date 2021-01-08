import { connect } from 'react-redux';
import React from 'react';
import Login from './Login';
import { Route } from 'react-router-dom';
import { Typography, Container, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        border: 'black',
        maxWidth: '50%'
    }
})

export const Landing = (props) => {
    const classes = useStyles();
    return(
        <div className='landing-page'>
            <div className='blurb'>
            <Container maxWidth='sm'>
                <Typography>
                    Ever wanted to search Reddit repeatedly for particular posts and save them in a concise location? The Saved tab in Reddit is just a list with no way of filtering posts by keywords and the subReddits to which they belong. We can do better.
                </Typography>
                <Divider variant='middle' />
                <Typography variant="h4">
                    Welcome to Requisition Reddit
                </Typography>
                <Divider variant='middle' />
                <Typography>
                    A website dedicated to allowing you to find, save, and filter Reddit posts to your liking. 
                </Typography>
            </Container>
            </div>
            <div>
                <Container maxWidth='sm'>
                    < Route path='/' component={Login} />
                </Container>
            </div>
        </div>
    )
}