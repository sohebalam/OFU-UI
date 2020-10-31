import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';



const useStyles = makeStyles(()=>({
    typographyStyles:  {
        flex: 1 
    }
})) 

const Header = () => {
    const classes = useStyles()
    return (
        <Container>
        <AppBar position="static" color="primary" >
            
         <Toolbar><Typography className={classes.typographyStyles}><Typography display="inline"><h1>OpenFreeUni </h1></Typography>{<img src="../images/v3.png" height="40px" alt="logo"/>}</Typography><AccountBoxIcon/>

        </Toolbar>
        
        </AppBar>


        
        </Container>


    )
}

export default Header
