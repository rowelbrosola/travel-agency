/**
 *
 * Carousel
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Bootstrap
import { Carousel as Slider } from 'react-bootstrap'

const MainSlider = styled.div`
		& img {
			height: auto;
		}
`

function Carousel() {
  return (
  	<MainSlider>
	  	<Slider>
		  	<Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider1.jpg"
			      alt="First slide"
			    />
			  </Slider.Item>
			  <Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider2.jpg"
			      alt="Third slide"
			    />
			  </Slider.Item>
			  <Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider3.jpg"
			      alt="Third slide"
			    />
		  	</Slider.Item>
			  <Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider4.jpg"
			      alt="Third slide"
			    />
		  	</Slider.Item>
			  <Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider5.jpg"
			      alt="Third slide"
			    />
		  	</Slider.Item>
			  <Slider.Item>
			    <img
			      className="d-block w-100"
			      src="Slider6.jpg"
			      alt="Third slide"
			    />
		  	</Slider.Item>
			</Slider>
		</MainSlider>	
  );
}

Carousel.propTypes = {};

export default memo(Carousel);
