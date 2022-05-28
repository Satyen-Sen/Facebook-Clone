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

function PostTwo() {
    return (
        <Card sx={{margin:2}}>
            <CardHeader 
                avatar={<Avatar alt="Rahul-Patel" src="https://cdn.pixabay.com/photo/2020/03/11/13/50/indian-4922226_1280.jpg"/>} 
                title="Rahul Patel" 
                subheader="May 09, 2022"        
            />

            <CardMedia 
                component="img" height="350" 
                image="https://img.theweek.in/content/dam/week/news/biz-tech/images/2019/1/2/train-18-ahlawat.jpg" 
                alt="Train18"
            />

            <CardContent>
                <Typography>Will speeds of Indian trains ever increase?</Typography>
                <Typography variant="body2" color="text.secondary"> 
                    IR has only a small stretch of track and allied infrastructure between Delhi and Agra which is fit for trains to run at 160 km/h.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton><Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/></IconButton>          
                <IconButton><Checkbox icon={<ShareIcon/>} checkedIcon={<ShareIcon/>}/></IconButton>              
            </CardActions>
        </Card>
    );
};

export default PostTwo; 