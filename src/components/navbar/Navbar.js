import React, { useState } from "react";
import "./Navbar.scss";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarSocials from "../socialMediaIcons/NavbarSocials";

const navLinks = ["Home", "About", "Art", "GameDesign", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const nav = (
    <Box
      className="nav-container"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        width: "100%",
        justifyContent: "space-between",
        // position: fix,
      }}
    >
      <Box
        sx={{
          ml: "20%",
          display: "flex",
        }}
      >
        <HashLink
          smooth
          to="/#"
          style={{ alignSelf: "center", textDecoration: "none" }}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              color: "#ffcb9a",
            }}
          >
            Sayo Oladoyin
          </Typography>
        </HashLink>
        <List
          sx={{
            display: "flex",
            position: "relative",
            // width: "30%",
            // justifySelf: "center",
            // justifyContent: "center",
          }}
        >
          {navLinks.map((text, index) => (
            <ListItem key={text} disablePadding>
              {console.log("/" + text + "#" + text + "-section")}
              <HashLink
                smooth
                to={text === "Contact" ? "/Contact#form" : "/" + "#" + text}
                className="link"
              >
                <ListItemButton>
                  <ListItemText disableTypography primary={text} sx={{}} />
                </ListItemButton>
              </HashLink>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          width: "10%",
          mr: "20px",
        }}
      >
        <NavbarSocials />
      </Box>
    </Box>
  );

  const drawerList = (
    <Box
      className="nav-drawer"
      sx={{
        height: "100%",
        width: "200px",
        backgroundColor: "#2C3531",
      }}
    >
      <Box
        sx={{
          width: "200px",
        }}
        onClick={() => toggleDrawer(false)}
      >
        <List
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            flexDirection: "column",
          }}
        >
          {navLinks.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ width: "100%" }}>
              {console.log("/" + text + "#" + text + "-section")}
              <HashLink
                smooth
                to={text === "Contact" ? "/Contact#form" : "/" + "#" + text}
                className="link"
                style={{ width: "100%" }}
              >
                <ListItemButton sx={{ width: "100%" }}>
                  <ListItemText disableTypography primary={text} sx={{}} />
                </ListItemButton>
              </HashLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
  return (
    <Paper
      className="navbar"
      sx={{
        backgroundColor: "#2C3531",
        display: "flex",
      }}
    >
      {nav}
      <Box
        sx={{
          display: { md: "none" },
        }}
      >
        <IconButton
          sx={{
            mt: "8px",
          }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </Paper>
  );
}

export default Navbar;
