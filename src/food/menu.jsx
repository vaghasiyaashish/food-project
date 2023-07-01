import React from "react";
import "../style/about.css";
import { Datalist } from "../data/data";
import Layout from "../component/layout/layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
function Menu() {
  return (
    <>
      <div className="menu">
        <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center" }}>
          {Datalist.map((menu) => (
            <Card sx={{maxWidth:'390px',display:"flex",m:2}}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
      <Layout />
    </>
  );
}

export default Menu;
