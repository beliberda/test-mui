import * as React from "react";
import { Card, styled, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Image from "mui-image";
import line from "../assets/line-h-svgrepo-com.svg";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#d7d7d7" : "#ffffff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: 293,
  borderRadius: 0,
  border: 0,
  boxShadow: "none",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 20,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const ItemImage = styled(Card)(({ theme }) => ({
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

export default function CardDescript(props) {
  return (
    <Item sx={{ color: "#000", padding: "31px" }}>
      <Typography variant="h6">{props.title}</Typography>
      <ItemImage
        src={line}
      ></ItemImage>
      <Typography variant="p1">{props.text}</Typography>
    </Item>
  );
}
