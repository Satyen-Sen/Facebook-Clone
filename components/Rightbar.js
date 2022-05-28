import React from 'react';
import { Box } from '@mui/system'; 
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


function Rightbar() {
    return (
        <Box bgcolor="#dfe3ee" flex={2} p={2} sx={{ display: { xs:"none", sm:"block" } }}>
            <Box position="fixed" width={300}>

                <Typography variant="h6" fontWeight={300}>Online Friends</Typography> 
                <AvatarGroup max={8}>
                    <Avatar alt="Rahul Patel" src="https://cdn.pixabay.com/photo/2020/03/11/13/50/indian-4922226_1280.jpg" />
                    <Avatar alt="Priyanka-Nair" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdCUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80" />
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={300} mt={4} mb={1}>Latest Photos</Typography> 
                <ImageList cols={3} rowHeight={100} gap={5} style={{borderRadius:"5px"}}>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt='Camera'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt='Coffee'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25" alt='Mushrooms'/>
                    </ImageListItem>                   
                </ImageList>

                <Typography variant="h6" fontWeight={300} mt={4} mb={1}>Conversations</Typography> 
                <List sx={{ width: '100%', maxWidth: 360, bgcolor:'#3b5998' }} style={{borderRadius:"5px"}}>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Vikram Singh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffWZ2g9m3DPjemXyhvwDlloQEbTR_PI9jbw&usqp=CAU" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ display: 'block' }} component="span" variant="p" color="white">
                                    Vikram Singh
                                </Typography>
                            }
                            secondary={
                                <Typography sx={{ display: 'block' }} component="span" variant="body3" fontWeight={300} color="#dfe3ee">
                                    Ek mast phone suggest kar. 
                                </Typography>
                            }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Aman Das" src="https://mui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ display: 'block' }} component="span" variant="p" color="white">
                                    Aman Das
                                </Typography>
                            }
                            secondary={
                                <Typography sx={{ display: 'block' }} component="span" variant="body3" fontWeight={300} color="#dfe3ee">
                                    Rahul ka number bhej. 
                                </Typography>
                            }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Priyanka Nair" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdCUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ display: 'block' }} component="span" variant="p" color="white">
                                    Priyanka Nair
                                </Typography>
                            }
                            secondary={
                                <Typography sx={{ display: 'block' }} component="span" variant="body3" fontWeight={300} color="#dfe3ee">
                                    Sunday evening INOX chalein?
                                </Typography>
                            }
                        />
                    </ListItem>

                   
                </List>

            </Box>
        </Box>
    );
}; 

export default Rightbar; 