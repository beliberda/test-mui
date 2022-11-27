import {
  Box,
  Card,
  CardContent,
  createTheme,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import video from "../assets/circle.png";

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 30,
      color: "#707070",
    },
    p1: {
      color: "#a0a0a0",
    },
  },
  palette: {
    primary: {
      main: "#282828",
    },
    secondary: {
      main: "#a2a2a2",
      light: "#ffffff",
    },
  },
});

const ItemCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#d7d7d7",
  color: theme.palette.text.primary,
  height: 293,
  minWidth: 293,
  border: 0,
  borderRadius: 0,
  boxShadow: "none",
}));

export default function CardInfo(props) {
  return (
    <ItemCard sx={{ backgroundColor: props.bgColor }}>
      <CardContent
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Image
            width={83}
            height={83}
            fit="contain"
            src={props.image}
            errorIcon={null}
          ></Image>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10" }}>
            <Typography variant="h1">{props.title}</Typography>
            <Typography variant="p1">{props.text}</Typography>
          </Box>
        </ThemeProvider>
      </CardContent>
    </ItemCard>
  );
}
