import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import './appBar.css'

import CommonButton from './CommonButton';
import { mainLinks } from '../utils/links.js'
import LOGO from '../assets/images/logo.png'

const NavBar = () => {

  let navigate = useNavigate();

  const clickHandler = () => {
    console.log('Create new property');
  }

  const buttonStyle = {
   color: '#fff',
   borderRadius: 0,
   position: 'absolute',
   right: 30,
   top: 0
  }

  return (
    <AppBar position="static" sx={{/*boxShadow: 'none',*/ background:'#fff'}}>
      <Container maxWidth="lg" >
        <Toolbar position="relative" >
            <CommonButton sx={buttonStyle} clickHandler={clickHandler} variant="contained">
              Add Property
            </CommonButton>
            <Box sx={{flexGrow: 1, marginY: 3}}>
                <img src={LOGO} alt="Logo" />
            </Box>
            <Box sx={{marginY: 3, display: 'flex' /* { xs: 'none', md: 'flex' }*/ }}>
                {mainLinks.map((link) => (
                  <Button
                    key={link.name}
                    onClick={() => navigate(link.url)}
                    sx={{ my: 2, color: '#1f223e;',fontSize: '16px', display: 'block' }}
                  >
                    {link.name}
                  </Button>
                ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default NavBar