
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Dashboard');

  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const drawerWidth = 240;

  return (
    <div style={{ display: 'flex' }}>
      {/* Header */}
      <AppBar position="fixed" sx={{ width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'black', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
        <Toolbar>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <img src="/images/Saf-logo.svg" alt="Company Logo" style={{ marginRight: '10px' }} />
            <Typography variant="h6" component="div">
              <span style={{ color: 'black', fontWeight: 'bold' }}>Retail </span>
              <span style={{ color: 'green', fontWeight: 'bold' }}>Voyager</span>
              
            </Typography>
          </div>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <span style={{ color: 'black', fontWeight: 'bold' }}>ADMIN </span>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        <Toolbar />
        <List>
          {['Dashboard', 'Users', 'Retail centres', 'Rating criteria'].map((item, index) => (
            <ListItem
              button
              key={item}
              selected={selectedItem === item}
              onClick={() => handleListItemClick(item)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main  */}
      <Container component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 64 }}>
        <Toolbar />
        
        {selectedItem === 'Dashboard' && (
          <Typography variant="h5" gutterBottom> Dashboard </Typography>)}
        {selectedItem === 'Users' && (
          <Typography variant="h5" gutterBottom> Users </Typography>)}
        {selectedItem === 'Retailers' && (
          <Typography variant="h5" gutterBottom>Retailer centers </Typography>)}
        {selectedItem === 'Settings' && (
          <Typography variant="h5" gutterBottom>Settings </Typography>
)}
      </Container>
    </div>
  );
};

export default Dashboard;
