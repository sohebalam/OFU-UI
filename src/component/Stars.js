import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import data from './Data'
import ProductCard from './Card';
import { Container, Grid } from '@material-ui/core';






export default function Stars(props) {
  const product = data.products.find(x=> x._rating === data.products.rating)
  if(!product) {
    return <div> Product Not Found</div>
  }

  return (
      

    
  
      
  
        
     <div>
                  {/* homescreen rating */}
                Rating <Rating value={product.rating} name="half-rating" defaultValue={0.5} precision={0.5}></Rating> 
               
        
     
      
                </div>
  

  
  )
}















// export default function Stars() {
  
//   // const product = data.products.find(returnproduct => returnproduct._id === props.match.params.id)
//   // const rating = product.rating
//   const [value, setValue] = React.useState(4);
//   return (
//     <div>
//       <Box component="fieldset" mb={1} borderColor="transparent">
//         <Typography  >Rating   <Rating style={{flex: 1}} name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}} /></Typography>
        
//       </Box>
    
//     </div>
//   );
// }