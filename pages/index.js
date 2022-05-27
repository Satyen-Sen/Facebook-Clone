import React from 'react';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

import HeadPart from '../components/HeadPart'; 
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';


function Index() {
  return (
    <Box>
      <HeadPart/>
      <Navbar/>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}; 

export default Index; 




      
