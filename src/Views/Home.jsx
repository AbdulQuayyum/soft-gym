import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Exercises, HeroBanner, SearchExercises } from "../Components/Index"
import MainLayout from '../Layout/Main.Layout'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState("all")

    return (
        <MainLayout>
            <Box>
                <HeroBanner />
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
            </Box>
        </MainLayout>
    )
}

export default Home