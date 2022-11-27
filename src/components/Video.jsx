import { styled } from "@mui/material/styles";

import { Card, Typography } from "@mui/material";
import Image from "mui-image";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary = "#2197d7",
  Color: theme.palette.secondary = "#ffffff",
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


export default function Video(props){
  return (
    <Item sx={{backgroundColor:props.color}}>
      <Image width={70} height={73} fit='contain' src={props.image} errorIcon={null}></Image>
      <Typography variant='h7'>{props.title}</Typography>
    </Item>
  );
}
