import React from 'react'; 

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function PostOne() {
    return (
        <Card sx={{margin:2}}>
            <CardHeader 
                avatar={<Avatar alt="Priyanka-Nair" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdCUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80"/>} 
                title="Priyanka Nair" 
                subheader="December 21, 2021"        
            />

            <CardMedia 
                component="img" height="350" 
                image="https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg" 
                alt="Forbes-Biryani"
            />

            <CardContent>
                <Typography>Biryani - Becoming a Desi Brand</Typography>
                <Typography variant="body2" color="text.secondary"> 
                    Biryani brings to the plate value, convenience and a satisfying experience at the same time. Companies have just scratched the surface of marketing the nuances of biryani, which is an emotion in India.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton><Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/></IconButton>          
                <IconButton><Checkbox icon={<ShareIcon/>} checkedIcon={<ShareIcon/>}/></IconButton>              
            </CardActions>
        </Card>
    );
};

export default PostOne; 