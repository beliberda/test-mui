import { Card, Typography } from "@mui/material";
import { createTheme, styled, ThemeProvider} from "@mui/material/styles";


import Image from "mui-image";


const newTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
    
})

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary = "#2197d7",
  color: theme.palette.main,
  textAlign: "center",

  height: 293,
  boxShadow: "none",
  borderRadius: 0,
  border: 0,
  display: 'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  gap: 20
}));


export default function CardButton(props){
  return (
    <ThemeProvider theme={newTheme}>
    <Item sx={{backgroundColor:props.color}}>
      <Image width={70} height={73} fit='contain' src={props.image} errorIcon={null}></Image>
      <Typography theme={newTheme} color='primary' variant='h7'>{props.title}</Typography>
    </Item>
    </ThemeProvider>
  );
}
