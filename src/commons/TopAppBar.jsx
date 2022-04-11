import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary' sx={{boxShadow: 'none'}}>
        <Container maxWidth="lg">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 400, color: '#909090'}}>
          <Box sx={{display: 'flex'}}>
            <Typography variant="subtitle"  sx={{ flexGrow: 1, marginRight: '66px' }}>
              +2348068963757
            </Typography> 

            <Typography variant="subtitle"  sx={{ flexGrow: 1 }}>
              tolufolorunso@yahoo.com
            </Typography>
          </Box>
          <Box sx={{display: 'flex', gap: '66px'}} className='user-auth'>
            <Button color="inherit">Create Agency</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">register</Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default TopAppBar