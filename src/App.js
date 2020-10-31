import React from 'react'
import './index.css';
import { Grid} from '@material-ui/core'
import Header from './component/Header';
import Content from './component/Content';
import Head from './component/Head';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Grid item> <Head/> </Grid> 
      <Grid item container> 
      
      <Content/>
      
      <Footer/>
     
      </Grid> 
     


   
      
  
   

</div>


    
  );
}

export default App;
