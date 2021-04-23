import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: '75%',
    height: '75%'
  },
  media: {
    height: 200,
  },
});

export default function ProjectCard ({title, desc, link, image}){
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        component={image}
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='h2'>
            random text
          </Typography>
          <Typography variant="body2" color="textSecondary" component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, asperiores!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View project
        </Button>
      </CardActions>
    </Card>
  );
}