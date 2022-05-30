import * as React from 'react';
import { Box } from '@mui/system'; 
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const UserBox = styled(Box) (({theme})=>({
  backgroundColor: "none", display:"flex", gap:"10px", alignItems:"center", marginBottom:"20px",   
})); 

function AddPost() {
  return (
    <Box height={240} bgcolor="white" p={2} borderRadius={3} marginLeft={2} marginRight={2}>

      <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
      <UserBox>
        <Avatar alt="Ishaan Dev" src="https://st.depositphotos.com/1008939/2240/i/600/depositphotos_22408839-stock-photo-serious.jpg" sx={{ width:30, height:30 }}/>
        <Typography variant="span" fontWeight={500}>Ishaan Dev</Typography>
      </UserBox>

      <TextField sx={{width:"100%"}} id="standard-multiline-static" multiline rows={2} placeholder="What's on your Mind?" variant="standard"/>
      <Stack direction="row" gap={1} spacing={2} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary"/>
        <ImageIcon color="secondary"/>
        <VideoCameraBackIcon color="success"/>
        <PersonAddAlt1Icon color="error"/>
      </Stack>

      <Stack direction="row" spacing={3} display="flex" justifyContent="center">
        <Button variant="contained" startIcon={<DeleteIcon/>}>Cancel</Button>
        <Button variant="contained" endIcon={<SendIcon/>}>Post</Button>
      </Stack>
    </Box>
  );
};

export default AddPost; 
