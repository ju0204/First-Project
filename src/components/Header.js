import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
      mobileOpen: null, // 'about' | 'biz' | null
      isScrolled: false,
    };
    this.openTimers = {};
    this.closeTimers = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 10;
    if (this.state.isScrolled !== scrolled) {
      this.setState({ isScrolled: scrolled });
    }
  };

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

  toggleMobileMenu = (key) => {
    this.setState((prev) => ({
      mobileOpen: prev.mobileOpen === key ? null : key,
    }));
  };

  closeDrawerAndMove = () => {
    this.setState({ right: false, mobileOpen: null });
  };

  renderMobileSection = (title, key, items) => {
    const isOpen = this.state.mobileOpen === key;

    return (
      <div className={`mobile-accordion-item ${isOpen ? 'open' : ''}`} key={key}>
        <button
          type="button"
          className={`mobile-accordion-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => this.toggleMobileMenu(key)}
        >
          <span>{title}</span>
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <div className="mobile-submenu">
            {items.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="mobile-submenu-link"
                onClick={this.closeDrawerAndMove}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </Collapse>
      </div>
    );
  };

  list = () => {
    const aboutItems = [
      { text: '인사말', path: '/ceo' },
      { text: '회사소개', path: '/about' },
      { text: '연혁', path: '/result' },
      { text: '조직도', path: '/work' },
      { text: '오시는길', path: '/road' },
    ];

    const bizItems = [
      { text: '개요', path: '/intro' },
      { text: '산불소화시설시공', path: '/install' },
      { text: '유지보수점검', path: '/repair' },
      { text: '전문 컨설팅', path: '/consulting' },
    ];

    return (
      <Box role="presentation" id="drawer-list">
        <Box className="close-icon-box" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton className="close-button" onClick={this.toggleDrawer(false)} aria-label="메뉴 닫기">
            <CloseIcon id="close-icon" />
          </IconButton>
        </Box>

        <div id="drawer-box" className="mobile-accordion-menu">
          {this.renderMobileSection('회사소개', 'about', aboutItems)}
          {this.renderMobileSection('사업소개', 'biz', bizItems)}

          <Link to="/notice" className="mobile-single-link" onClick={this.closeDrawerAndMove}>
            공지사항
          </Link>

          <Link to="/ask" className="mobile-single-link" onClick={this.closeDrawerAndMove}>
            문의하기
          </Link>
        </div>
      </Box>
    );
  };

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

            <Nav className="gap-3 main-nav">
              {/* 회사소개 */}
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
                        <li><Link to="/result" className="mega-link">연혁</Link></li>
                        <li><Link to="/work" className="mega-link">조직도</Link></li>
                        <li><Link to="/road" className="mega-link">오시는길</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 사업소개 */}
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
                        <li><Link to="/intro" className="mega-link">개요</Link></li>
                        <li><Link to="/install" className="mega-link">산불소화시설시공</Link></li>
                        <li><Link to="/repair" className="mega-link">유지보수점검</Link></li>
                        <li><Link to="/consulting" className="mega-link">전문 컨설팅</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Nav.Link as={NavLink} to="/notice" className="nav-link-custom">
                공지사항
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ask" className="nav-link-custom">
                문의하기
              </Nav.Link>
            </Nav>

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

        <Drawer
          anchor="right"
          open={right}
          onClose={this.toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: { xs: '100vw', sm: 420 },
              maxWidth: '420px',
            },
          }}
        >
          {this.list()}
        </Drawer>
      </>
    );
  }
}

export default Header;