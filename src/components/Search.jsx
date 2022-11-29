import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#d7d7d7",
  ...theme.typography.body2,
  minHeight: 293,
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
}));

export default function SearchInput(props) {
  return (
    <ThemeProvider theme={theme}>
      <Item color="primary" sx={{ backgroundColor: props.bgColor }}>
        <TextField
          id="mui-search-input"
          type="search"
          sx={{ color: "#ffffff", fontSize:'16px' }}
          fullWidth={true}
          color="primary"
      
          label="What you're looking for?"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment color='primary' position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Item>
    </ThemeProvider>
  );
}
