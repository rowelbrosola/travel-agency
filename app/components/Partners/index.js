/**
 *
 * Partners
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainPartners = styled.div`
	background-image: url("app-background.png");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
 	& div:first-of-type {
		text-align: center;
	& h1 {
		margin: 0px;
		color: #086080;
		font-size: 50px;
		font-weight: bold;
		line-height: 3;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-family: 'Work Sans', sans-serif;
		font-weight: bold;
	}
	& div {
		display: inline-block;
		padding: 2%;
		& img {
			border-radius: 50%;
			width: 200px;
			height: auto;
		}
	}
 }
`

function Partners() {
  return (
    <MainPartners>
    	<div>
	    	<h1>Partnership</h1>
	    	<div><img src="sample-logo.png" /></div>
	    	<div><img src="sample-logo.png" /></div>
	    	<div><img src="partner-logo1.png" /></div>
	    	<div><img src="sample-logo.png" /></div>
	    	<div><img src="sample-logo.png" /></div>
    	</div>
    </MainPartners>
  );
}

Partners.propTypes = {};

export default memo(Partners);
