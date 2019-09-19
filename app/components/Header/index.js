/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MainHeader = styled.div`
	font-size: 18px;
	& nav {
		height: 84px;
		& a {
			color: #fff;
		}
	}
	& .navbar-dark .navbar-nav .nav-link {
    color: #fff;
    text-transform: uppercase;
    border-right: 1px solid #fff;
	}
	& .navbar-dark .navbar-nav .nav-link:last-of-type {
		border: none;
	}
`

function Header() {
  return (
    <div>
    	<MainHeader>
	      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
				  <Navbar.Brand href="#home">Beyond The Travel</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ml-auto">
				      <Nav.Link href="/">Home</Nav.Link>
				      <Nav.Link href="/">Adventures</Nav.Link>
				      <Nav.Link href="/">Booking</Nav.Link>
				      <Nav.Link href="/">International</Nav.Link>
				      <Nav.Link href="/">Contact</Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
    	</MainHeader>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
