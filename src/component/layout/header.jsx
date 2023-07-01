import React, { useState } from "react";
import "../../style/header.css";
import { Link,NavLink } from "react-router-dom";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import Logo from '../../images/logo.svg'

import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [mobile, setMobile] = useState(false);

  const drawertoggle = () => {
    setMobile(!mobile);
  };

  const drawer  = (
   
      <Box onClick={drawertoggle} sx={{ textAlign: "center" }}>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my:2 }}
          
        >
                    <img src={Logo} alt="logo" height={'70'} width="200" />

        </Typography>
             <Divider/>   
             <ul className="mobile-menu">
              <li>
                <NavLink activeclassName="active" to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
      </Box>
  );
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
            onClick={drawertoggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onc
          >
           <img src={Logo} alt="logo" height={'70'} width="250" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink activeclassName="active" to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobile}
          onClose={drawertoggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& . MuiDrawer-paper": { boxSizing: "border-box", width: "240px " },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box>
      <Toolbar/>
      </Box> */}
    </Box>
    </>
  );
};
export default Header;
