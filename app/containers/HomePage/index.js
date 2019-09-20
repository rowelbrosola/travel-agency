/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import messages from './messages';

// Components
import Carousel from 'components/Carousel'
import Services from 'components/Services'
import Featured from 'components/Featured'

export default function HomePage() {
  return (
  	<div>
	    <Carousel />
	    <Services />
	    <Featured />
  	</div>
  );
}
