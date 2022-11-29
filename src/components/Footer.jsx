import { AppBar, Box,  IconButton, Link, Toolbar, Typography } from "@mui/material";

import * as React from "react";

import { styled } from "@mui/material/styles";


const pages = ['Service', 'Our Works', 'News & events', 'Work with us', 'F.A.Q', 'Contact us', 'Shop']


export default function Footer(props) {
  return (
    <AppBar position="relative" sx={{ background: "none", border: "none", boxShadow: "none", padding:'0' }}>
      <Toolbar sx={{ justifyContent: "space-between", padding:'0' }}>
        <Typography sx={{fontSize:'16px'}} variant="p1">
            2015 ©️ Copyright - Foundation theme by <Link color='#2197d7' href='#'>Stylemixthemes</Link> 
        </Typography>
        <Box sx={{ display: "flex", gap: "33px", justifyContent: "flex-end" }}>
         {pages.map((page)=>(
            <Box sx={{fontSize:'16px'}}>
                <Typography href='#'>{page}</Typography>    
            </Box>
         ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
