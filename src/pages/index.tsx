// components/Dashboard.tsx
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Dashboard = () => {
  return (
    <Box display="flex" height="100vh">
      {/* Left Sidebar */}
      <Box flex="0 0 250px" bgcolor="#fff" color="black" position="sticky" top={0}>
        {/* Company Logo */}
        <Box mb={3} p={3}>
          <Image src="/images/Saf-logo.svg" alt="Company Logo" width={150} height={50} />
        </Box>

        {/* Top Links */}
        <Box mb={3} p={3}>
          <a href="#">Link 1</a>
          <a href="#" style={{ marginLeft: '10px' }}>Link 2</a>
        </Box>

        {/* Additional List Items */}
        <List>
          <ListItem><a href="#">Item 1</a></ListItem>
          <ListItem><a href="#">Item 2</a></ListItem>
          <ListItem><a href="#">Item 3</a></ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={3} bgcolor="#f0f0f0">
        {/* Top Bar */}
        <AppBar position="sticky" style={{ backgroundColor: '#4CAF50', zIndex: 999 }}>
          <Toolbar>
            <Box flexGrow={1}>
              <Typography variant="h6" style={{ marginLeft: '250px' }}>Welcome to Retail Voyager</Typography>
            </Box>
            <Box>
              {/* Top Bar on the Right */}
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search" style={{ color: 'white' }} />
              <a href="#" style={{ marginLeft: '10px', color: 'white' }}>Account</a>
              <a href="#" style={{ color: 'white' }}>Logout</a>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Screen */}
        <Box border="1px solid #ccc" minHeight="300px" p={3} mt={2}>
          <textarea placeholder="Type something..."></textarea>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
