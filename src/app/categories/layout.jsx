import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const layout = ({children}) => {
     return (
          <Box>
             
                    <Grid container rowSpacing={1}>
                         <Grid item xs={12} lg={3}>
                              <CategoryList/>
                         </Grid>
                         <Grid item xs={12} lg={9}>
                               {children}
                         </Grid>
                         
                    </Grid>
          
          </Box>
     );
};

export default layout;