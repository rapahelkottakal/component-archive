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
import YouTube from 'react-youtube';


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
		let textoption1 ={

			fontSize:'14px',
			padding:'5% 10%',
			textAlign:'center',
			color:'#58574F'
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
		};

		const css = {
			img: {
				width: '100%',
				height: 'auto'
			},
			hr:{

				width:'35%',
				textAlign:'center',
				color:'#58574F',
			}
		};

		const videoOptions = {
			width:'100%',
			height:'auto',
			playerVars: {
				controls: 0,
				showinfo: 0,
				color: 'white',
	            // color: 'black'
	        },


		}


		return(
			<div style={this.getContainerStyles()}>

					<div>
							<img style={css.img} src="http://assets.myntassets.com/v1466428564/reactive/gerua-20-6-16/gerua_01.jpg" />
	
					</div>

					<div>
							<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_03-min.jpg" />
							<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_05-min.jpg" />
							<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_06-min.jpg" />
					</div>

					<div className='textoption1'>Beautiful georgette, cotton or cotton jacquard pieces in sunset hues will infuse your wardrobe with a youthful vibe.</div>
					<hr style={css.hr} />

					<div>
							<img style={css.img} src="http://assets.myntassets.com/v1466424769/reactive/gerua-20-6-16/Gerua_08-min.jpg" />
							<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_09-min.jpg" />
					</div>
					
					<div className='textoption1'>Trendy silhouettes and techniques like colourblocking and slits have created a jaw-dropping modern collection in materials like cotton, crepe and georgette. </div>
					<hr style={css.hr} />

					<div>
							<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_11-min.jpg" />
							<img style={css.img} src="http://assets.myntassets.com/v1466424769/reactive/gerua-20-6-16/Gerua_12-min.jpg" />
					</div>
					
					<div className='textoption1'style={{padding:'2% 10%'}}>The bold hued simple kurtas in cotton and cotton jacquard can be paired in many ways to create dazzling outfits.</div>
					<hr style={css.hr} />

					<div className='textoption1' style={{color:'#A7A492'}}>Can’t wait to get your hands on a Gerua? Get this look soon exclusively on Myntra.</div>
					
					<YouTube
						videoId="Vo8DxfSovnY"
						opts={videoOptions}
					/>
					
			</div>
		);

	}
}