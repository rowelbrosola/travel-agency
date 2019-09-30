/**
 *
 * Testimonials
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainTestimonial = styled.div`
	background: url("testimonial-background.png");
	background-repeat: no-repeat;
	background-size: cover;
 & div:nth-child(1) {
 	text-align: center;
 	background: rgba(243,245,246, 0.88); 
 	padding-bottom: 5%;
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
 		width: 33.33%;
 		padding: 10px 50px;
 		& img {
 			width: 200px;
 			height: auto;
 			background: #e6e6e6;
 			border-radius: 50%;
 		}
 		& h3 {
 			font-family: 'Big Shoulders Display', cursive;
 			line-height: 3;
 		}
 	}
 }
`

function Testimonials() {
  return (
  	<MainTestimonial>
	    <div>
	    	<h1>Testimonials</h1>
	    	<div>
	    		<img src="laurie.png" alt="Laurie Stephenson"/>
	    		<h3>Laurie Stephenson</h3>
	    		<p>It was a great experience working with Beyond the Travel! Hope to see you again soon.</p>
	    	</div>
	    	<div>
	    		<img src="garette.png" alt="Garette Quinn"/>
					<h3>Garette Quinn</h3>
	    		<p>Beyond the travel services was the best tour guide I've ever had. I highly recommended him!</p>
	    	</div>
	    	<div>
	    		<img src="jason.png" alt="Jason Myer"/>
					<h3>Jason Myer</h3>
	    		<p>That adventure was so much fun! I am looking forward to traveling with Beyond the Travel again!</p>
    		</div>
	    </div>
  	</MainTestimonial>
  );
}

Testimonials.propTypes = {};

export default memo(Testimonials);
