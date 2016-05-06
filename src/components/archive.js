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
		let textStyle ={
			textDecoration: 'none', 
			padding: '0 5%', 
			fontSize: '15px',
			letterSpacing:'1px',
			color:'#485160',

		}

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


			<Expander image="http://assets.myntassets.com/v1462359560/radium/SIS/fragrance/Beauty-store-fragrance.jpg">
				<div>
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

			</Expander>



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

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>01</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>Prep your eyes by applying moisturiser</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					02</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply primer or foundation</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					03</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Use a medium-sized brush to apply a light blue shade all over the lid</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					04</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Use a darker shade of blue on the crease and blend well</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					05</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Trace your lash line with a navy blue or indigo eyeliner</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					06</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply mascara for a dramatic effect</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />


					<div style={{padding: 10, color: '#728968', fontWeight: 600}}>STEPS TO GET ELECTRIC BLUE EYES</div>
					<hr width="10" align="left" style={{ maxWidth: 10, margin: 0, marginLeft: 10, borderTopColor: 'lightgray' }} />
					
					<Slideimage
					beforeImage="http://assets.myntassets.com/v1462429147/radium/SIS/eyes/blue-eye-before.jpg"
					afterImage="http://assets.myntassets.com/v1462429147/radium/SIS/eyes/blue-eye-after.jpg"
					/>

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					01</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Moisturise your eyelids</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					02</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply primer or foundation</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					03</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply charcoal gray powder just above the crease of the lid</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					04</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Trace your upper lash line with a black pencil</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					05</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Gently smudge using your fingertip</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />

					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					06</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Sweep gunmetal shade on your lower lash line</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />
					
					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					07</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply silver powder on the to the inner corner of the eyes</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />
					
					<div style={{padding: '13px 10px 10px 26px', color: 'rgb(222, 190, 223)', fontWeight: 600, fontSize: '23px', width: '17%', float: 'left', fontFamily: 'Open Sans'}}>
					08</div>
					<p style={{fontSize: '14px', width: '83%', padding: '3px 0 0', fontStyle: 'italic', fontWeight: 'bold' , color: '#A3A3A3'}}>
					Apply mascara</p>
					<hr width="100" align="left" style={{ margin: 0, marginLeft: 10, borderTopColor: 'lightgray', width: '92%' , borderTop: '1px dashed #efe4ea' }} />
					
				</div>

			</Expander>


			<Expander image="http://assets.myntassets.com/v1462430974/radium/SIS/face/Beauty-store-face.jpg">

				<div>

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
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428404/radium/SIS/face/cleanse-tone-mois.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Wash your face to make sure your skin in clean and hydrated. Apply a toner followed by a moisturiser.</div>
						</a>
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428404/radium/SIS/face/apply-dots.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Apply dots of primer in the center of your face and work outwards.</div>
						</a>
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428407/radium/SIS/face/start-edge.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Start applying foundation from your nose area moving towards chin, cheek and forehead. Spread it evenly with no clumps or lines.</div>
						</a>
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428409/radium/SIS/face/concealer.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Apply concealer under your eyes and areas that need covering up like blemishes and dark spots. Blend well.</div>
						</a>
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428411/radium/SIS/face/dust-loose-powder.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Dust on some loose powder using a powder brush from under the eyes to your cheeks.</div>
						</a>						
						<a href="http://www.myntra.com/" target="_blank" style={{textDecoration: 'none', color:'#485160'}}>
							<img src="http://assets.myntassets.com/v1462428414/radium/SIS/face/compact-powder.jpg" style={{ width: '100%', height: 'auto' }} />
							<div style={textStyle}>Press on compact powder to set the make-up and to ensure it lasts long.</div>
						</a>
					</Slider>

				</div>

			</Expander>


			</div>
		);

	}
}