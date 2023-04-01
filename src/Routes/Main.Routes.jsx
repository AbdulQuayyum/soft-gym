import React from 'react'
import { Box } from '@mui/material';
import { Routes, Route } from "react-router-dom"

import { ExerciseDetail, Home } from "../Views/Index"
import { Footer, Navbar } from "../Components/Index"

const MainRoutes = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default MainRoutes