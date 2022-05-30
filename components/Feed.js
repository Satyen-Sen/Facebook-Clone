import React from 'react'; 
import { Box } from '@mui/system';

import AddPost from './AddPost';
import PostOne from './PostOne';
import PostTwo from './PostTwo';
import PostThree from './PostThree';


function Feed() {
    return (
        <Box bgcolor="#dfe3ee" flex={4} p={2}>
            <AddPost/>
            <PostThree/>
            <PostOne/>
            <PostTwo/>
            <PostOne/>
            <PostTwo/>
        </Box>
    );
}; 

export default Feed; 