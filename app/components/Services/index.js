/**
 *
 * Services
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MainServices = styled.div`
	text-align: center;
	& h1 {
		font-size: 50px;
		font-weight: bold;
		text-transform: uppercase;
	}
	& .col {
		margin-bottom: 20px;
		& div:first-of-type {
			background: #f0f0f0;
			padding: 20px;
			& img {
				margin: 40px;
				width: auto%;
				height: 100%;
			}
		}
		& button {
			background: #323232;
			color: #fff;
			border-color: unset;
			width: 200px;
			height: 56px;
			border-radius: 0px;
		}
	}
`

function Services() {
  return (
    <div>
    	<MainServices>
    		<Container fluid>
  				<h1>Services</h1>
    			<Row>
    				<Col>
    					<div>
		      			<img src="/image-plane.png" />
		      			<p>
		      				Adventure trips are all about gaining experience, 
		      				making memorable things and learning new things in life. 
		      				Going for an adventure is the best way to get all these as it forces us 
		      				to escape our ordinary lives and try new things. <br/><br/>	
		      				Enjoy our fun and adventurous trip around Alberta, Canada. 
		      				Learn more about our services by clicking the button below.
		      			</p>
			      		<Link to="home"className="overlap-btn">
	                <Button variant="primary">Book Now</Button>
	              </Link>
		      		</div>
    				</Col>
    				<Col>
    					<div>
		      			<img src="/image-hotel.png" />
		      			<p>
		      				Explore unique flight, hotel and car rental experiences from different booking 
		      				site around the world. Start comparing and finding the best price for you. 
		      				It will not only save your money, but it will also save your 
		      				time by booking through our website. <br/><br/>	
		      				You can find the best deals faster at Beyond The Travel. 
		      				Learn more about bookings by clicking the button below.
		      			</p>
			      		<Link to="home"className="overlap-btn">
	                <Button variant="primary">Book Now</Button>
	              </Link>
		      		</div>
    				</Col>
    				<Col>
    					<div>
		      			<img src="/image-globe.png" />
		      			<p>
		      				Discover foreign lands, visit the numerous natural wonders, 
		      				interact with other people of different cultures and gain knowledge about 
		      				their heritage is such an amazing experience. <br/><br/>	
		      				Search for more tours around the world. Learn more about our international 
		      				stours by clicking the button below.
		      			</p>
				      		<Link to="#"className="overlap-btn">
		                <Button variant="primary">Book now</Button>
		              </Link>
		      		</div>
    				</Col>
    			</Row>
    		</Container>
    	</MainServices>
    </div>
  );
}

Services.propTypes = {};

export default Services;
