import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'orange' }} position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='white' component='div'>
            Open Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
