/**
 *
 * Featured
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MainCarousel = styled.div`
	& .image-box {
	  position: relative;
	}
	& .description {
	  transition: .5s ease;
	  opacity: 0;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
	  text-align: center;
	  & .text {
	  	color: #fff;
	  	& h1 {
	  		font-weight: bold;
	  	}
	  }
	}
	& .image-box:hover img {
	  opacity: 0.6;
	}

	& .image-box:hover .description {
	  opacity: 1;
	}
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Featured() {
  return (
  	<div>
  		<MainCarousel>
	  		<Carousel
				  swipeable={true}
				  draggable={false}
				  showDots={false}
				  responsive={responsive}
				  ssr={true} // means to render carousel on server-side.
				  infinite={true}
				  autoPlaySpeed={1000}
				  keyBoardControl={true}
				  transitionDuration={500}
				  containerClass="carousel-container"
				  dotListClass="custom-dot-list-style"
				  itemClass="carousel-item-padding-40-px"
				  partialVisbile="right"
				  centerMode={false}
				>
				  <div className="image-box">
				  	<img
				      className="d-block w-100"
				      src="canmore-cave.jpg"
				      alt="First slide"
				    />
				    <div className="description">
					    <div className="text">
					    	<h1>Johnston Canyon</h1>
					    	<p>Upper Falls</p>
					    	<p>Lower Falls</p>
					    	<p>The Walking Trail</p>
					    </div>
					  </div>
				  </div>
				  <div className="image-box">
				  	<img
				      className="d-block w-100"
				      src="canmore-mountains.jpg"
				      alt="First slide"
				    />
				    <div className="description">
					    <div className="text">
					    	<h1>Johnston Canyon</h1>
					    	<p>Upper Falls</p>
					    	<p>Lower Falls</p>
					    	<p>The Walking Trail</p>
					    </div>
					  </div>
				  </div>
				  <div className="image-box">
				  	<img
				      className="d-block w-100"
				      src="canmore-mountains-1.jpg"
				      alt="First slide"
				    />
				    <div className="description">
					    <div className="text">
					    	<h1>Okotoks</h1>
					    	<p>Big Rock</p>
					    	<p>Overlooking nice view</p>
					    </div>
					  </div>
				  </div>
				  <div className="image-box">
				  	<img
				      className="d-block w-100"
				      src="johnson-canyon.jpg"
				      alt="First slide"
				    />
				    <div className="description">
					    <div className="text">
					    	<h1>Canmore</h1>
					    	<p>Cave Explorer</p>
					    	<p>Cave Adventure</p>
					    </div>
					  </div>
				  </div>
				  <div className="image-box">
				  	<img
				      className="d-block w-100"
				      src="okotoks.jpg"
				      alt="First slide"
				    />
				    <div className="description">
					    <div className="text">
					    	<h1>Waterton</h1>
					    	<p>Cruise Ship</p>
					    	<p>Lake View</p>
					    	<p>Famous Hotel</p>
					    	<p>Cammeron Falls</p>
					    </div>
					  </div>
				  </div>
				</Carousel>
			</MainCarousel>
  	</div>
  );
}

Featured.propTypes = {};

export default Featured;
