// Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', margin: 0 }}>
      <Toolbar style={{ padding: 0 }}>
        {/* Left side: Company Logo and Name */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          {/* Add your company logo here */}
          <img src="/images/Saf-logo.svg" alt="Company Logo" style={{ marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            <span style={{ color: 'black', fontWeight: 'bold' }}>Retail </span>
            <span style={{ color: 'green', fontWeight: 'bold' }}>Voyager</span>
          </Typography>
        </div>

        {/* Middle: Search Field */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
          <TextField
            id="outlined-basic" label="Search" variant="outlined" size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'black' }} />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'white', borderRadius: '8px', padding: '8px', fontSize: '14px', minWidth: '800px' }}
          />
        </div>

        {/* Right side: Account Icon and Name (displayed when logged in) */}
        {/* For simplicity, I'm using a static Account Name. You should replace it with dynamic data when a user logs in */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <AccountCircleIcon sx={{ marginRight: '8px', color: 'black' }} />
          <Typography variant="subtitle1" component="div" sx={{ color: 'black' }}>
            John Doe {/* Replace with the dynamic user name */}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
