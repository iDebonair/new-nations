import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';

const Header = () => {
  const [growAnchorEl, setGrowAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

  const handleMouseOver = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (e, setAnchorEl) => {
    setAnchorEl(false);
    setAboutAnchorEl(null);
    setGrowAnchorEl(null);
  };

  const handleClose = (setAnchorEl) => {
    setAnchorEl(null);
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
            src="https://placekitten.com/40/40"
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

        <Button color="inherit" component={Link} to="/visit" sx={{ color: '#444444', marginRight: '12px' }}>
          Visit
        </Button>
        <Button color="inherit" component={Link} to="/calendar" sx={{ color: '#444444', marginRight: '12px' }}>
          Need Prayer?
        </Button>

        {/* Grow Dropdown */}
        <div
          onMouseEnter={(event) => handleMouseOver(event, setGrowAnchorEl)}
          onMouseLeave={(event) => handleMouseLeave(event, setGrowAnchorEl)}
        >
          <Button
            color="inherit"
            aria-controls="grow-menu"
            aria-haspopup="true"
            sx={{
              color: '#444444',
              marginRight: '12px',
              '&:hover': {
                backgroundColor: 'grey',
              },
            }}
          >
            Grow
          </Button>
          <Menu
            id="grow-menu"
            anchorEl={growAnchorEl}
            open={Boolean(growAnchorEl)}
            onClose={() => handleClose(setGrowAnchorEl)}
            transformOrigin={{
              vertical: 6,
              horizontal: 0,
            }}
          >
            <MenuItem component={Link} to="/baptism">
              Baptism
            </MenuItem>
            <MenuItem component={Link} to="/member-database">
              Member Database
            </MenuItem>
          </Menu>
        </div>

        {/* About Dropdown */}
        <div
          onMouseEnter={(event) => handleMouseOver(event, setAboutAnchorEl)}
          onMouseLeave={(event) => handleMouseLeave(event, setAboutAnchorEl)}
        >
          <Button
            color="inherit"
            aria-controls="about-menu"
            aria-haspopup="true"
            sx={{
              color: '#444444',
              marginRight: '12px',
              '&:hover': {
                backgroundColor: 'grey',
              },
            }}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={() => handleClose(setAboutAnchorEl)}
            transformOrigin={{
              vertical: 8,
              horizontal: 0,
            }}
          >
            <MenuItem component={Link} to="/pastorate">
              Pastorate
            </MenuItem>
            <MenuItem component={Link} to="/who-we-are">
              Who we are
            </MenuItem>
            <MenuItem component={Link} to="/youth-unusual">
              Youth Unusual
            </MenuItem>
            <MenuItem component={Link} to="/ministries">
              Ministries
            </MenuItem>
          </Menu>
        </div>

        <Button color="inherit" component={Link} to="/offering" sx={{ color: '#444444', marginRight: '12px' }}>
          Offering
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
