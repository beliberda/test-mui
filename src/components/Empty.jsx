import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import { Card } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#d7d7d7",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minWidth: 293,
  minHeight: 293,
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}));

export default function Empty(props) {
  return (
    <Item sx={{backgroundColor:props.bgColor}}>
    </Item>
  );
}
