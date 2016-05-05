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
				<a href="http://assets.myntassets.com/v1462431400/radium/SIS/eyes/Beauty-store-mockup-eyes.jpg" style={linkStyel}>
					<img src="http://assets.myntassets.com/v1462361670/radium/SIS/fragrance/davidoff-1.jpg" style={imgStyle} />
				</a>










				<ShowMore>
					<ImageChild
						image="http://assets.myntassets.com/v1462359560/radium/SIS/fragrance/Beauty-store-fragrance.jpg"
						width="100%"
					>
						<div style={{marginBottom: 10}}>These perfumes have a fresh aroma with distinct hints of fruity scents. They are not too overpowering making them perfect for occasions like date night. Ideal for summer.</div>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361670/radium/SIS/fragrance/davidoff-1.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361671/radium/SIS/fragrance/calvin-klein-2.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361673/radium/SIS/fragrance/polic-3.jpg" style={imgStyle} />
						</a>

					</ImageChild>
					<ImageChild
						image="http://assets.myntassets.com/v1462425782/radium/SIS/eyes/eyes-header.jpg"
						width="100%"
					>
						<div style={{marginBottom: 10}}>These perfumes give off a lively and energetic vibe. They can be quite strong and are perfect for outdoor daytime activities like a sunday brunch with friends. Ideal for summer.</div>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361670/radium/SIS/fragrance/davidoff-1.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361671/radium/SIS/fragrance/calvin-klein-2.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361673/radium/SIS/fragrance/polic-3.jpg" style={imgStyle} />
						</a>
						
					</ImageChild>
					<ImageChild
						image="http://assets.myntassets.com/v1462426184/radium/SIS/face/Beauty-store-face.jpg"
						width="100%"
					>
						<div style={{marginBottom: 10}}>Considered to be the most feminine scents of the lot, these sweet-smelling perfumes are quite timeless. Perfect for special occasions like a wedding or family dinner. Ideal for winter.</div>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361670/radium/SIS/fragrance/davidoff-1.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361671/radium/SIS/fragrance/calvin-klein-2.jpg" style={imgStyle} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" style={linkStyel} target="_blank">
							<img src="http://assets.myntassets.com/v1462361673/radium/SIS/fragrance/polic-3.jpg" style={imgStyle} />
						</a>
						
					</ImageChild>
				</ShowMore>
				</div>				
			</div>
		);

	}
}