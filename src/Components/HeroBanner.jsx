import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Banner } from '../Assets/Index';

const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#aaa" fontWeight="600" fontSize="26px">Soft Gym</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Sweat, Smile <br />
            And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Nunito" lineHeight="35px">
            Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <a href="#Exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#aaa', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={600} color="#aaa" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
            Exercise
        </Typography>
        <img src={Banner} alt="hero-banner" className="Banner Image" />
    </Box>
)

export default HeroBanner