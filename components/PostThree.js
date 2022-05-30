import * as React from 'react';
import { Box } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function PostThree() {
    return (
        <Card sx={{margin:2, height: 500}} >
            <CardHeader 
                avatar={<Avatar alt="Priyanka-Nair" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhdCUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80"/>} 
                title="Priyanka Nair" 
                subheader="December 21, 2021"        
            />

            <Box sx={{ height: 800, overflowY: 'noscroll'}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>

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

const itemData = [
      {
        img: 'https://vitaratours.com/wp-content/uploads/2021/04/i-love-ooty.jpg',
        title: 'Welcome',
      },
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/1.jpeg?1605605737',
        title: 'HillTop',
      },
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/1.jpeg?1605605737',
        title: 'HillTop',
      },
      {
        img: 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/gyko6nkmvh1a44v852wylp470ki3_1589460874_garden.jpg',
        title: 'Resort',
      },
      {
        img: 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/gyko6nkmvh1a44v852wylp470ki3_1589460874_garden.jpg',
        title: 'Resort',
      },
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/1.jpeg?1605605737',
        title: 'HillTop',
      },
    ];

export default PostThree; 