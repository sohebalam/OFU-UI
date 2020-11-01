import {  Container, Grid } from '@material-ui/core'
import React from 'react'
import ProductCard from './Card'
import data from './Data'



const Content = () => {

    const getProductCard = (product) => {
        
        return (
            <Grid item xs={12} sm={4} >
            <ProductCard {...product}/>
            </Grid>
        )
    }


    return (
        <Container>
        <Grid container spacing={2}>
          
                
               {data.products.map(product => getProductCard(product))}
            
            
            
            
            </Grid>
        
            
        </Container>
    )
}

export default Content
