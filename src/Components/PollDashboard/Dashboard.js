import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MovieIcon from '@mui/icons-material/Movie';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

// Styling components
import './Dashboard.css';

const drawerWidth = 240;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ToolbarStyled = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '150px',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const CircularProgressStyled = styled(CircularProgress)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  margin: 'auto',
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  maxHeight: '400px', // Adjust based on your layout
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: '8px',
}));

const Dashboard = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(true); // Always show "Vote Here" subtopics

  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return (
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed" className="appBarStyled">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          
          <div className="toolbarRight">
            <Typography variant="h6" noWrap>
              Want to create Poll?
            </Typography>
            <img src="https://i3.wp.com/media0.giphy.com/media/xyWqUFUZ857c7jDUTO/source.gif?ssl=1" alt="Poll Gif" className="poll-gif" />
            <Button color="inherit" style={{ marginLeft: '10px' }} onClick={handleNavigation('/NewSignin')}>Register</Button>
            <Button color="inherit" onClick={handleNavigation('/NewSignup')}>Sign Up</Button>
          </div>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent" className="drawerStyled">
        <ToolbarStyled />
        <List>
          <ListItem button onClick={handleNavigation('/education')}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/social')}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Social Media" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/health')}>
            <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
            <ListItemText primary="Healthcare" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/technology')}>
            <ListItemIcon><ComputerIcon /></ListItemIcon>
            <ListItemText primary="Technology" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/sports')}>
            <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
            <ListItemText primary="Sports" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/entertainment')}>
            <ListItemIcon><MovieIcon /></ListItemIcon>
            <ListItemText primary="Entertainment" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/government')}>
            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
            <ListItemText primary="Government" />
          </ListItem>
          <ListItem button onClick={handleNavigation('/settings')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </DrawerStyled>
      <Content className="content">
        <ToolbarStyled />
        <Container className="centeredContainer gap">
          <Typography variant="h4" gutterBottom className="sectionTitle">
            What's Trending
          </Typography>
          <Grid container spacing={2} className="gridContainer">
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/entertainment" className="boxStyled">
                <img src="https://xoyondo.com/img/apoll_en2.png" alt="Trending Polls" />
                
              </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/trending-polls" className="boxStyled">
                <img src="https://xoyondo.com/img/poll-tool-setup-en.png" alt="Trending Polls" />
                
              </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/trending-polls" className="boxStyled">
                <img src="https://support.content.office.net/en-us/media/d3be104a-cb32-4937-bf8b-2ac0cc2bf902.png" alt="Trending Polls" />
                
              </BoxStyled>
            </Grid>
          </Grid>
        </Container>

        <Container className="centeredContainer">
          <Typography variant="h4" gutterBottom className="sectionTitle">
            Based On Your Interest
          </Typography>
          <Grid container spacing={2} className="gridContainer">
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/entertainment" className="boxStyled">
                <img src="https://cdn4.vectorstock.com/i/1000x1000/32/63/entertainment-word-concepts-banner-show-business-vector-29163263.jpg" alt="Interest 1" />
                
              </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/interest2" className="boxStyled">
                <img src="https://www.shutterstock.com/image-vector/design-concept-word-education-website-260nw-1192358593.jpg" alt="Interest 2" />
                
              </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <BoxStyled component={Link} to="/interest3" className="boxStyled">
                <img src="https://i.pinimg.com/736x/b2/c6/e2/b2c6e2d9fbe7ca8e2c4cea6caec2cdfd.jpg" alt="Interest 3" />
                
              </BoxStyled>
            </Grid>
          </Grid>
        </Container>

        <Container className="centeredContainer">
          <Typography variant="h4" gutterBottom className="sectionTitle">
            Performance Analysis
          </Typography>
          <Grid container spacing={2} className="gridContainer">
            <Grid item xs={12} sm={6} md={4} className="gridItem">
              <CircularProgressStyled
                variant="determinate"
                value={70}
                size={100}
                thickness={4}
                color="success"
              />
              <Typography variant="h6" color="textSecondary">70%</Typography>
            </Grid>
          </Grid>
        </Container>

        <Container className="centeredContainer">
          <Typography variant="h4" gutterBottom className="sectionTitle">
            Your Previous Votes
          </Typography>
          <ScrollableContainer>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <BoxStyled>
                  <img src="https://support.content.office.net/en-us/media/6683b5e1-9ef5-4703-b011-3732ec344a78.png" alt="Previous Vote 1" />
                  <Typography variant="h6" className="title">Previous Vote 1</Typography>
                </BoxStyled>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <BoxStyled>
                  <img src="https://mattipaukkonen.com/wp-content/uploads/2019/11/image-25.png?w=785" alt="Previous Vote 2" />
                  <Typography variant="h6" className="title">Previous Vote 2</Typography>
                </BoxStyled>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <BoxStyled>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsR-yqyJmXqO2G3BaZR2MH2hW74uqB37hbW8inYj2jbwQ3xtga0G8n34-efAc6uZRsMes&usqp=CAU" alt="Previous Vote 3" />
                  <Typography variant="h6" className="title">Previous Vote 3</Typography>
                </BoxStyled>
              </Grid>
              {/* Add more cards as needed */}
            </Grid>
          </ScrollableContainer>
        </Container>
      </Content>
    </Root>
  );
};

export default Dashboard;
