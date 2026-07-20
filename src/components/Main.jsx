import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/initial_logo.png";

const Main = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  }

  handleCloseNavMenu();
};

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="AR Logo"
              sx={{
                width: "80px",
                height: "65px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("home")}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={() => scrollToSection("home")}>Home</MenuItem>
              <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
              <MenuItem onClick={() => scrollToSection("skills")}>Skills</MenuItem>
              <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>
              <MenuItem onClick={() => scrollToSection("contact")}>Contact</MenuItem>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            <Button onClick={() => scrollToSection("home")} sx={btnStyle}>
              Home
            </Button>

            <Button onClick={() => scrollToSection("about")} sx={btnStyle}>
              About
            </Button>

            <Button onClick={() => scrollToSection("skills")} sx={btnStyle}>
              Skills
            </Button>

            <Button onClick={() => scrollToSection("projects")} sx={btnStyle}>
              Projects
            </Button>

            <Button onClick={() => scrollToSection("contact")} sx={btnStyle}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const btnStyle = {
  color: "black",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    color: "orange",
    backgroundColor: "transparent",
  },
};

export default Main;