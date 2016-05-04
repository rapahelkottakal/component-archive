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

					<img
						src="http://assets.myntassets.com/v1462359560/radium/SIS/fragrance/Beauty-store-fragrance.jpg"
						style={{ width: '100%', height: 'auto' }}
					/>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY BRAND</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />

					<div>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360006/radium/SIS/fragrance/boss-brnad-logo.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360007/radium/SIS/fragrance/versace-brnad-logo.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360009/radium/SIS/fragrance/dior-brnad-logo.jpg" style={imgStyle} />
						</a>
					</div>
					<div>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360011/radium/SIS/fragrance/dg-brnad-logo.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360013/radium/SIS/fragrance/ch-brnad-logo.jpg" style={imgStyle} />
						</a>
						<a style={linkStyel}>
							<img src="http://assets.myntassets.com/v1462360033/radium/SIS/fragrance/hermes-brnad-logo.jpg" style={imgStyle} />
						</a>
					</div>

					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>SHOP BY TYPE</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />

					<Slider {...settings}>
						<a href="http://www.myntra.com/women-deos-perfumes" target="_blank">
							<img src="http://assets.myntassets.com/v1462360756/radium/SIS/fragrance/perfume-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" target="_blank">
							<img src="http://assets.myntassets.com/v1462360758/radium/SIS/fragrance/deo-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" target="_blank">
							<img src="http://assets.myntassets.com/v1462360756/radium/SIS/fragrance/body-mist-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>
						<a href="http://www.myntra.com/women-deos-perfumes" target="_blank">
							<img src="http://assets.myntassets.com/v1462361594/radium/SIS/fragrance/aromatherapy-mist-menu.jpg" style={{ width: '100%', height: 'auto' }} />
						</a>

					</Slider>

					<img
						src="http://assets.myntassets.com/v1462361029/radium/SIS/fragrance/brand-card-fragrance.jpg"
						style={{ width: '100%', height: 'auto', paddingTop: 10 }}
					/>
					<img
						src="http://assets.myntassets.com/v1462361443/radium/SIS/fragrance/guide-to-fragrances.jpg"
						style={{ width: '100%', height: 'auto' }}
					/>
					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1462352818/radium/SIS/fragrance/fruity-menu.jpg"
							width="33.33%"
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
							image="http://assets.myntassets.com/v1462352816/radium/SIS/fragrance/floral-menu.jpg"
							width="33.33%"
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
							image="http://assets.myntassets.com/v1462354162/radium/SIS/fragrance/oceanic-menu.jpg"
							width="33.33%"
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



					<img
						src="http://assets.myntassets.com/v1462361827/radium/SIS/fragrance/ORIENTAL.jpg"
						width="33.33%"
					/>
					<img
						src="http://assets.myntassets.com/v1462361828/radium/SIS/fragrance/MUSKY.jpg"
						width="33.33%"
					/>
					<img
						src="http://assets.myntassets.com/v1462361828/radium/SIS/fragrance/WOODY.jpg"
						width="33.33%"
					/>




				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}