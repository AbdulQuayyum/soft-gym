import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import { HorizontalScrollbar, Loader } from "./Index"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#aaa', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#aaa', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
);

export default SimilarExercises;