import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DG from './photo/DG1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      menuHovered: false,
    };
  }

  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ right: open });
  };

  handleNavDropdownHover1 = (hover) => {
    this.setState({ navDropdownHovered1: hover });
  };

  handleNavDropdownHover2 = (hover) => {
    this.setState({ navDropdownHovered2: hover });
  };

  handleMenuIconHover = (hover) => {
    this.setState({ menuIconHovered: hover });
  };

  list = () => (
    <Box 
      sx={{ width: 700 }}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
      id="drawer-list" // 추가된 CSS 클래스
    >
      <Box className='close-icon-box' sx={{ display: 'flex', justifyContent: 'flex-end'}}>
      <IconButton className="close-button" onClick={this.toggleDrawer(false)}>
          <CloseIcon id="close-icon" />
      </IconButton>

      </Box>
      <List id='drawer-box'>
        {[
          { text: '홈', path: '/' },
          { text: '회사소개', path: '/about' },
          { text: '조직도', path: '/work' },
          { text: '실적', path: '/result' },
          { text: '산불소화시설 설치사업', path: '/install' },
          { text: '산불소화시설 유지보수', path: '/repair' },
          { text: '오시는길', path: '/road' },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    return (
      <>
        <Navbar id='navbar' bg="light" data-bs-theme="light">
          <Container id='nav-container'  fluid>
            <Navbar.Brand href="/"><img id='nav-logo' src={DG} alt='대건이엔에스'  /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link id="nav-link" as={Link} to="/">홈</Nav.Link>
              <NavDropdown 
                id="nav-link" 
                title="회사소개" 
                onMouseEnter={() => this.handleNavDropdownHover1(true)}
                onMouseLeave={() => this.handleNavDropdownHover1(false)}
                show={this.state.navDropdownHovered1}
                
              >
                <NavDropdown.Item id="custom-dropdown-item" as={Link} to="/about">회사소개</NavDropdown.Item>
                <NavDropdown.Item id="custom-dropdown-item" as={Link} to="/work">조직도</NavDropdown.Item>
                <NavDropdown.Item id="custom-dropdown-item" as={Link} to="/result">실적</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown 
                id="nav-link" 
                title="사업소개" 
                onMouseEnter={() => this.handleNavDropdownHover2(true)}
                onMouseLeave={() => this.handleNavDropdownHover2(false)}
                show={this.state.navDropdownHovered2}
                
              >
                <NavDropdown.Item id="custom-dropdown-item" as={Link} to="/install">산불소화시설 설치사업</NavDropdown.Item>
                <NavDropdown.Item id="custom-dropdown-item" as={Link} to="/repair">산불소화시설 유지보수</NavDropdown.Item>
                {/* 추가 세부 메뉴 아이템을 여기에 추가하세요 */}
              </NavDropdown>
              <Nav.Link id="nav-link" as={Link} to="/road">오시는길</Nav.Link>
            </Nav>
            <IconButton 
              id='nav-menu'
              onMouseEnter={() => this.handleMenuIconHover(true)}
              onMouseLeave={() => this.handleMenuIconHover(false)}
              onClick={this.toggleDrawer(true)}
              sx={{ color: 'black' }}
              disableRipple 
            >
              {this.state.menuIconHovered ? <MenuOpenIcon id='nav-menu' sx={{ color: 'black' }} /> : <MenuIcon id='nav-menu' sx={{ color: 'black' }} />}
            </IconButton>
          </Container>
        </Navbar>
        <Drawer
          anchor='right'
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
          id={{ paper: 'drawer-paper' }} // 추가된 CSS 클래스
        >
          {this.list()}
        </Drawer>
      </>
    );
  }
}

export default Header;
