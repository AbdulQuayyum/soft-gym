import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import { Logo } from '../Assets/Index';

const Footer = () => (
    <Box mt="80px" bgcolor="whitesmoke">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: 'auto', height: '41px' }} />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with 🖤 by Abdul-Quayyum</Typography>
    </Box>
);

export default Footer