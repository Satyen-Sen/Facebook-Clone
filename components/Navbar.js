import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'; 

const StyledToolbar = styled(Toolbar) ({display:"flex", justifyContent:"space-between"})

function Navbar() {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h5">SlamBook</Typography>

            </StyledToolbar>
        </AppBar>
    );
}; 

export default Navbar; 