import { CardActionArea, Typography, Card, CardActions, CardMedia, CardContent, Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        maxWidth: 345,
        width: 345,
        height: 'auto',
        margin: 25,

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
                <Link style={{ textDecoration: 'none'}} to={{pathname: `${post.redditUrl}`}} target="_blank">
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={post.imageUrl}
                          title={post.title}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h6">
                              {post.title}
                          </Typography>
                          <Typography>
                              {post.body}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Link>
                <CardActions>
                    <Button size="small" color="primary" href={`${post.redditUrl}`} target="_blank" rel="noopener">
                        View Post
                    </Button>
                    <Button size="small" color="primary">
                        Delete
                    </Button>
                </CardActions>
            </Card> 
        </div>
    )
};