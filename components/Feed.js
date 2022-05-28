import React from 'react'; 
import { Box } from '@mui/system';

import PostOne from './PostOne';
import PostTwo from './PostTwo';


function Feed() {
    return (
        <Box bgcolor="#dfe3ee" flex={4} p={2}>
            <PostOne/>
            <PostTwo/>
            <PostOne/>
            <PostTwo/>
        </Box>
    );
}; 

export default Feed; 