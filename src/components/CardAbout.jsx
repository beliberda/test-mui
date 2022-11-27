import {
  Button,
  Card,
  CardContent,
  createTheme,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";

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
      main: "#363636",
    },
    secondary: {
      main: "#a2a2a2",
    },
  },
});

const ItemCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#d7d7d7",
  color: theme.palette.text.primary,
  minHeight: 293,
  maxHeight: 586,
  border: 0,
  borderRadius: 0,
  boxShadow: "none",
}));

const Line = styled(Card)(({ theme }) => ({
  backgroundColor: "#282828",
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

export default function CardAbout(params) {
  return (
    <ItemCard sx={{ backgroundColor: params.bgColor }}>
      <CardContent
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h1">{params.title}</Typography>
          <Line></Line>
          <Typography variant="p1">{params.text}</Typography>
          <Button
          variant="contained"
            color="primary"
            sx={{
              height: 46,
              border: "none",
              borderRadius: 0,
              width: 161,
            }}
          >
            {params.buttonText}
          </Button>
        </ThemeProvider>
      </CardContent>
    </ItemCard>
  );
}
