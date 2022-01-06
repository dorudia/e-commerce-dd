import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>E-Commerce-DD</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            style={{ position: 'relative' }}
          >
            <Nav className='mr-auto' style={{ position: 'absolute', right: 0 }}>
              <Link to='/cart'>
                <span className='header-links'>
                  <i className='fas fa-shopping-cart'></i>Cart
                </span>
              </Link>
              <Link to='/login'>
                <span className='header-links'>
                  <i className='fas fa-user'></i>Sign In
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
