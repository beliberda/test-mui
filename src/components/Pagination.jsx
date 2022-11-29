import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  ...theme.typography.body2,
  textAlign: "center",
  // color: theme.palette.text.secondary,

  height: 293,
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  color: "#6c6c6c",
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function Paginate(props) {
  return (
    <Item>
      <ArrowLeftOutlinedIcon sx={{fontSize:'50px', margin: 0}} />
      <div style={{display:'flex'}}>
        <h1>01</h1>
        <h2>/03</h2>
      </div>
      <ArrowRightOutlinedIcon sx={{fontSize:'50px'}} />
    </Item>
  );
}
