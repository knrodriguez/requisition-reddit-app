import React from 'react';
import { Typography } from '@material-ui/core';

export const NotFound = (props) => {
    return (
        <div className='notFound'>
            <Typography id='not-found-error' variant='h4'>404 - Page Not Found</Typography>
            <Typography variant='h5'>Here, have a calming image.</Typography>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.highreshdwallpapers.com%2Fwp-content%2Fuploads%2F2014%2F03%2FTranquil-Open-Paradise-1920x1080.jpg&f=1&nofb=1' />
        </div>
    )
}