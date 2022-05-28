import React from 'react'; 
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

function Sidebar() {
    return (
        <Box flex={1} p={2} sx={{ display: { xs:"none", sm:"block" } }}>
            
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Homepage'>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Pages'>
                        <ListItemIcon><ArticleIcon/></ListItemIcon>
                        <ListItemText primary="Pages"/>
                    </ListItemButton>
                </ListItem>
                
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Groups'>
                        <ListItemIcon><GroupsIcon/></ListItemIcon>
                        <ListItemText primary="Groups"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Marketplace'>
                        <ListItemIcon><StoreIcon/></ListItemIcon>
                        <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Friends'>
                        <ListItemIcon><PersonIcon/></ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Settings'>
                        <ListItemIcon><SettingsIcon/></ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#Settings'>
                        <ListItemIcon><DarkModeIcon/></ListItemIcon>
                        <Switch/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}; 

export default Sidebar; 