import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import SideNav from './SideNav'
import { Box } from '@mui/material'



export const Layout = () => {
  return (
    <>
        <Box sx={{ display: 'flex' }}>

        <SideNav/>
        <Outlet/>
        </Box>
   
    </>
  )
}
