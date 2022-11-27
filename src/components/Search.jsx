import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const theme = createTheme({
    typography: {
      h1: {
        fontWeight: 700,
        fontSize: 30,
        color: "#ffffff",
      },
    },
    palette:{
      primary: {
        main:'#ffffff'
      },
      secondary:{
        main:'#ffffff',
        light:'#ffffff'
      }
    }
  });

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
  display:'flex',
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
}));

export default function SearchInput(props) {
  return (
    <Item sx={{ backgroundColor: props.bgColor}}>
      <Input fullWidth={true} color='primary'></Input>
    <Search sx={{margin:'-20px', color:'#ffffff'}}></Search>
    </Item>
  );
}
