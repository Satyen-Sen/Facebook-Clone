import * as React from 'react';
import { Box } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
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
        <Card sx={{margin:2, height: 630}} >
            <CardHeader 
                avatar={<Avatar alt="Vikram Singh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffWZ2g9m3DPjemXyhvwDlloQEbTR_PI9jbw&usqp=CAU"/>} 
                title="Vikram Singh" 
                subheader="February 28, 2022"        
            />

            <Box sx={{ height: 450, overflowY: 'noscroll', position:'relative', zIndex:1}}>
                <ImageList variant="masonry" cols={3} gap={8} position="back">
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
            <div>
              <Divider sx={{ m:-2, background:'white', border:'none', height:'14px', position:'relative', zIndex:2 }} variant="top"/>  
            </div>
            <Typography sx={{mt:4, ml:3}}>My Ooty Trip Photos</Typography>
            <CardActions disableSpacing>
                <IconButton><Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/></IconButton>          
                <IconButton><Checkbox icon={<ShareIcon/>} checkedIcon={<ShareIcon/>}/></IconButton>           
            </CardActions> 
        </Card>
    );
};

const itemData = [
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/12.jpeg?1605605737',
        title: 'Lake',
      },
      {
        img: 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/gyko6nkmvh1a44v852wylp470ki3_1589460874_garden.jpg',
        title: 'Resort',
      },
      {
        img: 'https://vitaratours.com/wp-content/uploads/2021/04/i-love-ooty.jpg',
        title: 'Welcome',
      },
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/1.jpeg?1605605737',
        title: 'HillTop',
      },
      {
        img: 'https://c.ndtvimg.com/gws/1341/assets/10.jpeg?1605605737',
        title: 'train',
      },
      {
        img: 'https://www.trawell.in/admin/images/upload/208533138Ooty_Tea_Park.jpg',
        title: 'park',
      },
    ];

export default PostThree; 