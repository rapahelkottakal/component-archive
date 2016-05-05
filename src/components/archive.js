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

			<Expander image="http://assets.myntassets.com/v1462425782/radium/SIS/eyes/eyes-header.jpg">
			
			

				<div>

					<Slider {...settings}>
						<a href="http://www.myntra.com" target="_blank">
							<img src="http://assets.myntassets.com/v1462425884/radium/SIS/eyes/eyeshadow-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com" target="_blank">
							<img src="http://assets.myntassets.com/v1462425883/radium/SIS/eyes/mascara-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com" target="_blank">
							<img src="http://assets.myntassets.com/v1462425882/radium/SIS/eyes/eyeliner-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com" target="_blank">
							<img src="http://assets.myntassets.com/v1462426869/radium/SIS/eyes/cleanser-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
					</Slider>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY COLLECTION</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />


					<img
						src="http://assets.myntassets.com/v1462428495/radium/SIS/eyes/day-collection.jpg"
						style={{ width: '50%', height: 'auto', paddingTop: 10 }}
					/>
					<img
						src="http://assets.myntassets.com/v1462428495/radium/SIS/eyes/night-collection-.jpg"
						style={{ width: '50%', height: 'auto' }}
					/>


					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>STEPS TO GET SMOKEY EYES</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />

					<Slideimage
					beforeImage="http://assets.myntassets.com/v1462429004/radium/SIS/eyes/smokey-eye-before.jpg"
					afterImage="http://assets.myntassets.com/v1462429004/radium/SIS/eyes/smokey-eye-after.jpg"
					/>



					<img
						src="http://assets.myntassets.com/v1462428246/radium/SIS/eyes/Beauty-store-mockup-eyes-text.jpg"
						width="100%"
					/>


					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>STEPS TO GET ELECTRIC BLUE EYES</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />
					
					<Slideimage
					beforeImage="http://assets.myntassets.com/v1462429147/radium/SIS/eyes/blue-eye-before.jpg"
					afterImage="http://assets.myntassets.com/v1462429147/radium/SIS/eyes/blue-eye-after.jpg"
					/>

					<img
						src="http://assets.myntassets.com/v1462428246/radium/SIS/eyes/Beauty-store-mockup-eyes-text-2.jpg"
						width="100%"
					/>
				</div>

			</Expander>				
			</div>
		);

	}
}