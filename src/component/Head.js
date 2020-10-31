import { AppBar, Button, Container, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';



const useStyles = makeStyles(()=>({
    typographyStyles:  {
        flex: 1 
    }
})) 

const Header = () => {
    
    return (
        <Container>
        <AppBar position="static" color="primary" >
            




         <Toolbar>
         
         <Typography  edge='start' ><h3>OpenFreeUni</h3></Typography>
             <IconButton  aria-label='menu'> {<img src="../images/v3.png" height="40px" alt="logo"/>}</IconButton>
             
             <Typography variant='h6' style={{flex: 1}}></Typography>
             <Button colour='inherit' edge='start' aria-label='menu'> Login</Button>
             <Button colour='inherit' edge='start' aria-label='menu'> Register</Button>
        </Toolbar>
        
        </AppBar>


        
        </Container>


    )
}

export default Header
