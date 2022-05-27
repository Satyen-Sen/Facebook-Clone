import React, { useState } from 'react'; 
import styled from '@emotion/styled';
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar) ({display:"flex", justifyContent:"space-between"}); 

const Search = styled("div") (({theme})=>({
    backgroundColor: "white", padding:"0 10px", borderRadius:"5px", width:"55%", margin:"0 35px 0 0", 
})); 

const Icons = styled(Box) (({theme})=>({
    backgroundColor: "none", display:"flex", gap:"25px", alignItems:"center", padding:"0 20px", 
})); 

const UserBox = styled(Box) (({theme})=>({
    backgroundColor: "none", display:"flex", gap:"10px", alignItems:"center",   
})); 

function Navbar() {

    const [open, setOpen] = useState(false); 

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h4" sx={{ display: { xs:"none", sm:"block" } }}>
                    SlamBook
                </Typography>

                <FacebookIcon sx={{ display: { xs:"block", sm:"none" } }} />
                <Search><InputBase placeholder='Search...'/></Search>

                <Icons sx={{ display: { xs:"none", sm:"flex" } }} >
                    <Badge badgeContent={4} color="error"><MailIcon color="white" /></Badge>
                    <Badge badgeContent={2} color="error"><NotificationsIcon color="white" /></Badge>
                </Icons>

                <UserBox>
                    <Avatar alt="User-Avatar" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Matkai_Burmaster_Profile_Photo.jpg" 
                    onClick={(e) => setOpen(true)}/>
                    <Typography>David Jones</Typography>
                </UserBox>
            </StyledToolbar>
            
            <Menu
                id="positioned-menu" aria-labelledby="positioned-button" open={open} onClick={(e) => setOpen(false)}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    );
}; 

export default Navbar; 