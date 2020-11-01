import React from 'react'
import './index.css';
import { Grid} from '@material-ui/core'


import Head from './component/Head';
import Footer from './component/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from '../src/screens/HomeScreen'
import ProductScreen from '../src/screens/ProductScreen'


function App() {
  return (
    
    <div className="App">
      <Grid item> <Head/> </Grid> 
      <Grid item container> 
      <BrowserRouter>
      
      <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/product/:id'component={ProductScreen} exact></Route>
            </BrowserRouter>
      <Footer/>
      
      </Grid> 
     


   
      
  
   

</div>


    
  );
}

export default App;
