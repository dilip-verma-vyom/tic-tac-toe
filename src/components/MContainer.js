import React from 'react';
import {  
    Grid,
    Container,
  } from '@mui/material';

const MContainer = (props) => {

    const { children } = props;

    return (
        <Container 
            maxWidth='lg'
            sx={{
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            {...props}
        >
            { children }
        </Container>
    )
}

export default MContainer;
