import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "mui-image";
import * as React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/facebook-logo-svgrepo-com.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const Icons = styled(IconButton)(() => ({
  maxWidth: "24px",
  maxHeight: "22px",
  padding: 0,
}));

export default function Header(props) {
  return (
    <AppBar position="absolute" sx={{ background: "none", border: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton sx={{padding:0}}>
          <Image src={logo}></Image>
        </IconButton>
        <Box sx={{ display: "flex", gap: "44px", justifyContent: "flex-end" }}>
          <Icons>
            <Image src={fb}></Image>
          </Icons>
          <Icons>
            <TwitterIcon sx={{ color: "white" }} />
          </Icons>
          <Icons>
            <MenuIcon fontSize="large" sx={{ color: "white", marginRight:'2px' }} />
          </Icons>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
