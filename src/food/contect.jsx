import "../style/about.css";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Layout from "../component/layout/layout";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
function Contect() {
  return (
    <>
      <div className="contact">
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            animi veniam, totam alias molestias laudantium culpa officiis odit
            enim, impedit quisquam. Itaque quas sint, facilis odio laborum
            voluptatibus temporibus officiis?
          </p>
        </Box>
        <Box
          sx={{
            // m: 3,
            width: "600px",
            ml: 10,mb:10 ,
            "@media (max-width:600px)": {
              width: "250px",
              ml: 10,
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Detail
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                    1800-00-0000 (tollFree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                    help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1,}} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
      <Layout />
    </>
  );
}

export default Contect;
