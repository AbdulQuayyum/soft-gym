import React from 'react'
import { Box } from '@mui/material';

import { Footer, Navbar } from "../Components/Index"

export default function MainLayout(props) {
  const { children } = props
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}