import * as React from "react";
import {
  Box,
  Card,
  createTheme,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#d7d7d7" : "#ffffff",
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
  height: 293,
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: 20,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}));

const Line = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "40px",
  height: "40px",
  maxWidth: 40,
  maxHeight: 5,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
}));
const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 30,
      color: "#363636",
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#8bd0f9",
    },
  },
});

export default function CardNews(props) {
  return (
    <ThemeProvider theme={theme}>
      <Item
        color="primary"
        sx={{ backgroundColor: props.bgColor, padding: "31px" }}
      >
        <Typography color="primary" variant="h1">
          NEWS
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="secondary" variant="p1">
            {props.data}
          </Typography>
          <Typography color="primary" variant="h6">
            {props.title}
          </Typography>
        </Box>
        <Typography color="secondary" variant="p1">
          {props.comments} comments
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Box>
      </Item>
    </ThemeProvider>
  );
}
