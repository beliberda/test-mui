import { Card, CardContent, Paper, styled, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Image from "mui-image";
import { Box } from "@mui/system";

const ItemStarts = styled(Box)(({ theme }) => ({
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  color: "#ffad01",
}));
const ItemCard = styled(Card)(({theme})=>({
  backgroundColor: "#ffffff",
  textAlign: "center",
  height: 293,
  minWidth: 293,
  boxShadow: "none",
  borderRadius: 0,
  border: 0,
}))

export default function Review(params) {
  return (
    <ItemCard
      sx={{
        backgroundColor: params.bgColor,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          textAlign: "center",
          padding: '30px'
        }}
      >
        <Image sx={{ maxWidth: 60, maxHeight: 60 }} src={params.path}></Image>
        <Typography variant="h6">Michael H. Jhonson</Typography>
        <ItemStarts>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </ItemStarts>
        <Typography variant="p1">{params.text}</Typography>
      </CardContent>
    </ItemCard>
  );
}
