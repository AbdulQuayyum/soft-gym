import React from 'react'
import { Routes, Route } from "react-router-dom"

import { ExerciseDetail, Home } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Exercise/:id" element={<ExerciseDetail />} />
        </Routes>
    )
}

export default MainRoutes