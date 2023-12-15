import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';

const Header = () => {
  const [growAnchorEl, setGrowAnchorEl] = useState(null);
  const [growMenuOpen, setGrowMenuOpen] = useState(false);

  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const handleMouseOver = (event, setAnchorEl, setMenuOpen) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMouseLeave = (setMenuOpen) => {
    // Clear the timeout to prevent closing the menu
    clearTimeout(setMenuOpen.timeoutId);

    // Set a delay before closing the menu
    setMenuOpen.timeoutId = setTimeout(() => {
      setMenuOpen(false);
    }, 500); // Adjust the delay as needed
  };

  const handleClose = (setAnchorEl, setMenuOpen) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#444444' }}
        >
          <img
            src="https://placekitten.com/40/40"  // Replace with the URL of your church logo
            alt="Church Logo"
            style={{ marginRight: '12px', borderRadius: '50%', width: '40px', height: '40px' }}
          />
          <Typography variant="h6" component="div" sx={{ color: 'black' }}>
            New Nations Baptist Church
          </Typography>
        </Box>

        <div style={{ flexGrow: 1 }}></div>

        <Button color="inherit" component={Link} to="/live-stream" sx={{ color: '#444444', marginRight: '12px' }}>
          Live Stream
        </Button>
        <Button color="inherit" component={Link} to="/calendar" sx={{ color: '#444444', marginRight: '12px' }}>
          Need Prayer?
        </Button>

        {/* Grow Dropdown */}
        <Button
          color="inherit"
          aria-controls="grow-menu"
          aria-haspopup="true"
          onMouseOver={(event) => handleMouseOver(event, setGrowAnchorEl, setGrowMenuOpen)}
          onMouseLeave={() => handleMouseLeave(setGrowMenuOpen)}
          sx={{ color: '#444444', marginRight: '12px' }}
        >
          Grow
        </Button>
        <Menu
          id="grow-menu"
          anchorEl={growAnchorEl}
          open={growMenuOpen}
          onClose={() => handleClose(setGrowAnchorEl, setGrowMenuOpen)}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'bottom',
          }}
        >
          <MenuItem onClick={() => handleClose(setGrowAnchorEl, setGrowMenuOpen)} component={Link} to="/baptism">
            Baptism
          </MenuItem>
          <MenuItem onClick={() => handleClose(setGrowAnchorEl, setGrowMenuOpen)} component={Link} to="/member-database">
            Member Database
          </MenuItem>
        </Menu>

        {/* About Dropdown */}
        <Button
          color="inherit"
          aria-controls="about-menu"
          aria-haspopup="true"
          onMouseOver={(event) => handleMouseOver(event, setAboutAnchorEl, setAboutMenuOpen)}
          onMouseLeave={() => handleMouseLeave(setAboutMenuOpen)}
          sx={{ color: '#444444', marginRight: '12px' }}
        >
          About
        </Button>
        <Menu
          id="about-menu"
          anchorEl={aboutAnchorEl}
          open={aboutMenuOpen}
          onClose={() => handleClose(setAboutAnchorEl, setAboutMenuOpen)}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'bottom',
          }}
        >
          <MenuItem onClick={() => handleClose(setAboutAnchorEl, setAboutMenuOpen)} component={Link} to="/pastorate">
            Pastorate
          </MenuItem>
          <MenuItem onClick={() => handleClose(setAboutAnchorEl, setAboutMenuOpen)} component={Link} to="/who-we-are">
            Who we are
          </MenuItem>
          <MenuItem onClick={() => handleClose(setAboutAnchorEl, setAboutMenuOpen)} component={Link} to="/youth-unusual">
            Youth Unusual
          </MenuItem>
          <MenuItem onClick={() => handleClose(setAboutAnchorEl, setAboutMenuOpen)} component={Link} to="/ministries">
            Ministries
          </MenuItem>
        </Menu>

        <Button color="inherit" component={Link} to="/offering" sx={{ color: '#444444', marginRight: '12px' }}>
          Offering
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
