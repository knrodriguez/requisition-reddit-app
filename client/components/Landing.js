import { connect } from 'react-redux';
import React from 'react';
import Login from './Login';
import { Route } from 'react-router-dom';

export const Landing = (props) => {
    return(
        <div className='landing-page'>
            <div>THIS WILL BE A BLURB</div>
            < Route path='/' component={Login} />
        </div>
    )
}