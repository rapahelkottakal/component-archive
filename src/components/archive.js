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

		var settingsSlide = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};
		let imgStyle = {
			width: '100%',
			height: 'auto',
			display: 'inline-block',
			padding : '0px 5px',
		},

			linkStyel = {
			display: 'inline-block',
			width: '33.33%'
		},
			linkStyels = {
			display: 'inline-block',
			width: '25%'
		};
		return(
			<div style={this.getContainerStyles()}>

				<div>

					<img
						src="http://assets.myntassets.com/v1462430974/radium/SIS/face/Beauty-store-face.jpg"
						style={{ width: '100%', height: 'auto' }}
					/>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY TYPE</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />
					
					<Slider {...settings}>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462426190/radium/SIS/face/foundation-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462426197/radium/SIS/face/bb-cream-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462426201/radium/SIS/face/face-primer-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462426204/radium/SIS/face/blush-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>

					</Slider>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY SKIN TONE</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />

					<div>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462427337/radium/SIS/face/fair-menu.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462427340/radium/SIS/face/wheatish-menu.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462427343/radium/SIS/face/dark-menu.jpg" style={imgStyle} />
						</a>
					</div>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY SKIN TYPE</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />


					<div>
						<a style={linkStyels}>
							<img src="http://assets.myntassets.com/v1462427593/radium/SIS/face/normal-skin-menu.jpg" style={imgStyle} />
						</a>
						<a style={linkStyels}>
							<img src="http://assets.myntassets.com/v1462427596/radium/SIS/face/oily-skin-menu.jpg" style={imgStyle} />
						</a>
						<a style={linkStyels}>
							<img src="http://assets.myntassets.com/v1462427602/radium/SIS/face/dry-skin-menu.jpg" style={imgStyle} />
						</a>
						<a style={linkStyels}>
							<img src="http://assets.myntassets.com/v1462427608/radium/SIS/face/sensitive-ski-menu.jpg" style={imgStyle} />
						</a>
					</div>

					<img
						src="http://assets.myntassets.com/v1462429095/radium/SIS/face/foundation-gif.gif"
						style={{ width: '100%', height: 'auto' }}
					/>
					<img
						src="http://assets.myntassets.com/v1462429190/radium/SIS/face/steps-to-apply-base.jpg"
						style={{ width: '50%', height: 'auto' }}
					/>					

					<Slider {...settingsSlide}>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428404/radium/SIS/face/cleanse-tone-mois.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428404/radium/SIS/face/apply-dots.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428407/radium/SIS/face/start-edge.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428409/radium/SIS/face/concealer.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428411/radium/SIS/face/dust-loose-powder.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>						
						<a href="http://www.myntra.com/" target="_blank">
							<img src="http://assets.myntassets.com/v1462428414/radium/SIS/face/compact-powder.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
					</Slider>

				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}