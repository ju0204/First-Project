// Header.js
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
import DG from './photo/DG1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      menuIconHovered: false,
      megaOpen: null, // 'about' | 'biz' | null
      isScrolled: false,
    };
    this.openTimers = {};
    this.closeTimers = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll(); // 첫 렌더 시 상태 반영
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 10; // 임계값은 필요에 따라 조정
    if (this.state.isScrolled !== scrolled) {
      this.setState({ isScrolled: scrolled });
    }
  };

  // 메가메뉴 open/close 약간의 딜레이로 자연스럽게
  openMega = (key, delay = 90) => {
    clearTimeout(this.closeTimers[key]);
    clearTimeout(this.openTimers[key]);
    this.openTimers[key] = setTimeout(() => this.setState({ megaOpen: key }), delay);
  };
  closeMegaDelayed = (key, delay = 180) => {
    clearTimeout(this.openTimers[key]);
    clearTimeout(this.closeTimers[key]);
    this.closeTimers[key] = setTimeout(() => {
      if (this.state.megaOpen === key) this.setState({ megaOpen: null });
    }, delay);
  };

  toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    this.setState({ right: open });
  };

  handleMenuIconHover = (hover) => this.setState({ menuIconHovered: hover });

  list = () => (
    <Box role="presentation" onKeyDown={this.toggleDrawer(false)} id="drawer-list">
      <Box className="close-icon-box" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton className="close-button" onClick={this.toggleDrawer(false)} aria-label="메뉴 닫기">
          <CloseIcon id="close-icon" />
        </IconButton>
      </Box>

      <List id="drawer-box">
        {[
          { text: '홈', path: '/' },
          { text: '인사말', path: '/ceo' },
          { text: '회사소개', path: '/about' },
          { text: '조직도', path: '/work' },
          { text: '실적', path: '/result' },
          { text: '산불소화시설 설치사업', path: '/install' },
          { text: '산불소화시설 유지보수', path: '/repair' },
          { text: '오시는길', path: '/road' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} onClick={this.toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    const { menuIconHovered, right, megaOpen, isScrolled } = this.state;

    return (
      <>
        <Navbar
         id="navbar"
          bg="light"
          data-bs-theme="light"
          sticky="top"
          className={isScrolled ? 'scrolled' : ''}
        >
          <Container id="nav-container" fluid>
            <Navbar.Brand as={Link} to="/" className="brand">
              <img id="nav-logo" src={DG} alt="대건이엔에스" />
            </Navbar.Brand>

            {/* 데스크톱 네비 */}
            <Nav className="gap-3 main-nav">
              <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
                홈
              </Nav.Link>

              {/* 회사소개 메가메뉴 */}
              <div
                className="nav-item has-mega"
                onMouseEnter={() => this.openMega('about')}
                onMouseLeave={() => this.closeMegaDelayed('about')}
                onFocus={() => this.openMega('about')}
                onBlur={() => this.closeMegaDelayed('about')}
              >
                <span className={`nav-link-custom top-link ${megaOpen === 'about' ? 'active' : ''}`}>
                  회사소개
                </span>

                <div className={`mega-panel ${megaOpen === 'about' ? 'show' : ''}`}>
                  <div className="mega-inner">
                    <div className="mega-col">
                      <ul>
                        <li><Link to="/ceo" className="mega-link">인사말</Link></li>
                        <li><Link to="/about" className="mega-link">회사소개</Link></li>
                        <li><Link to="/work" className="mega-link">조직도</Link></li>
                        <li><Link to="/result" className="mega-link">연혁</Link></li>
                        <li><Link to="/record" className="mega-link">공사 실적</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 사업소개 메가메뉴 */}
              <div
                className="nav-item has-mega"
                onMouseEnter={() => this.openMega('biz')}
                onMouseLeave={() => this.closeMegaDelayed('biz')}
                onFocus={() => this.openMega('biz')}
                onBlur={() => this.closeMegaDelayed('biz')}
              >
                <span className={`nav-link-custom top-link ${megaOpen === 'biz' ? 'active' : ''}`}>
                  사업소개
                </span>

                <div className={`mega-panel ${megaOpen === 'biz' ? 'show' : ''}`}>
                  <div className="mega-inner">
                    <div className="mega-col">
                      <ul>
                        <li><Link to="/install" className="mega-link">산불소화시설 설치사업</Link></li>
                        <li><Link to="/repair" className="mega-link">산불소화시설 유지보수</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 일반 링크 */}
              <Nav.Link as={NavLink} to="/road" className="nav-link-custom">
                오시는길
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ask" className="nav-link-custom">
                문의하기
              </Nav.Link> 
            </Nav>

            {/* 모바일 드로어 버튼 */}
            <IconButton
              className="nav-menu"
              aria-label="메뉴 열기"
              onMouseEnter={() => this.handleMenuIconHover(true)}
              onMouseLeave={() => this.handleMenuIconHover(false)}
              onClick={this.toggleDrawer(true)}
              disableRipple
            >
              {menuIconHovered ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Container>
        </Navbar>

        {/* Drawer (모바일) */}
        <Drawer
          anchor="right"
          open={right}
          onClose={this.toggleDrawer(false)}
          PaperProps={{ sx: { width: { xs: '100vw', sm: 480 } } }}
        >
          {this.list()}
        </Drawer>
      </>
    );
  }
}

export default Header;
