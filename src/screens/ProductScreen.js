import { Button, Card, CardActions, CardContent, Container, Grid,  makeStyles, Typography } from '@material-ui/core'
import { FilterNone, NoEncryption } from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../component/Data'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'none',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

 
   

export default function ProductScreen(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    const product = data.products.find(x=> x._id === props.match.params.id)
    if(!product) {
      return <div> Product Not Found</div>
    }

    return (
        

      <Container>
        <Button>Back to results</Button>

      <Grid container >
        
        <Grid item  container xs={4}>
          <img src={product.imgSrc} alt={product.title} style={{ height: "205px" }}></img>
        </Grid>
        <Grid item xs={4}>

          
          <ul>
              <li>
            <h1>{product.title}</h1>
              </li>
              <li>
                  Rating <Rating value={product.rating} name="half-rating" defaultValue={0.5} precision={0.5}></Rating>
                 
              </li>
              <li>
                 Blended Learning Price: £{product.price}
              </li>
          </ul>
        </Grid>
      
        <Grid item xs={4}>
        <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Grid container > {product.status === true ? (<span className="success">Available</span>) : (<span className="error">Unavailable</span>)}</Grid>
        </Typography>
        <Typography >
        <Grid container > Blended Learning Price: £{product.price} </Grid>
        </Typography>
             <Typography variant="body2" component="p">
             <h4> {product.title}</h4> 
              {product.description}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button >Add to Cart</Button>
      </CardActions>
    </Card>


    
      
        
        </Grid>
        
      </Grid>
    

      </Container>
    )
}
