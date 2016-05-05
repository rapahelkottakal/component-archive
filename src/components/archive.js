import React from 'react';
import Slider from 'react-slick';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Textonimage from './text-on-image'
import Reveal from './reveal';
import Title from './title';

import Slideimage from './slideimage';
import Popup from './popup';


import FlipCard from './flip-card';
import sliderGroupData from '../data/slider-group';
import SliderGroup from './slide-group';

import ShowMore from './showMore';
import ImageChild from './imageChild';

import Expander from './expander';


export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			// backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	// getTextPositionStyles() {
	// 	return {

	// 		position: 'absolute',
	// 		top: 10,
	// 		left: 50,
	// 		width: '100%',
	// 	}
	// }


	render() {

		// console.log('test', sliderGroupData);


		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 3,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};

		let imgStyle = {
			width: '100%',
			height: 'auto',
			display: 'inline-block'
		},

			linkStyel = {
			display: 'inline-block',
			width: '33.33%'
		};

		return(
			<div style={this.getContainerStyles()}>

				<div>

				<Expander
					image = "http://assets.myntassets.com/v1462359560/radium/SIS/fragrance/Beauty-store-fragrance.jpg"
				>
					<img src="http://assets.myntassets.com/v1462433126/radium/SIS/eyes/lips.jpg" />
				</Expander>

				<Expander
					image = "http://assets.myntassets.com/v1462426184/radium/SIS/face/Beauty-store-face.jpg"
				>
					<img src="http://assets.myntassets.com/v1462435894/radium/SIS/face/Beauty-store-face-mockupp.jpg" />
				</Expander>

				<Expander
					image = "http://assets.myntassets.com/v1462425782/radium/SIS/eyes/eyes-header.jpg"
				>
					<img src="http://assets.myntassets.com/v1462431400/radium/SIS/eyes/Beauty-store-mockup-eyes.jpg" />
					
				</Expander>

				<Expander
					image = "http://assets.myntassets.com/v1462433236/radium/SIS/eyes/Beauty-store-lips.jpg"
				>
					<img src="http://assets.myntassets.com/v1462433126/radium/SIS/eyes/lips.jpg" />
					
				</Expander>



				</div>				
			</div>
		);

	}
}