import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Stars() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={1} borderColor="transparent">
        <Typography  >Rating   <Rating style={{flex: 1}} name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}} /></Typography>
        
      </Box>
    
    </div>
  );
}