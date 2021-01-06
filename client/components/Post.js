import { CardActionArea, Typography, Card, CardActions, CardMedia, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
    root:{
        maxWidth: 345,
    },
    media:{
        height: 140
    }
});

export default (props) => {
    const { post } = props;
    const classes = useStyles();

    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={post.imageUrl}
                        title={post.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography>
                            {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Delete
                    </Button>
                </CardActions>
            </Card> 
        </div>
    )
};