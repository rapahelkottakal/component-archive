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
		let textoption1 ={

			fontSize:'14px',
			padding:'0px 5px',
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


		return(
			<div style={this.getContainerStyles()}>

			<div className='textoption1'>Did you know that 80% of women wear the wrong size bra? Straps riding up the back, cups being a size too small or shoulder straps digging into the skin — these are all problems caused by not wearing the right size. Here’s how to find the right one. </div>

			<div style={{padding:'5px', fontSize:'18px', fontWeight:800, textAlign: 'center', marginBottom: '2%' }}> TAP TO KNOW MORE</div>

			<Expander image="http://assets.myntassets.com/v1465211219/reactive/bra-guide/measure-yourself.jpg">
				<div>
					<div style={{fontWeight:800, fontSize:'18px', padding: '5%'}}>BAND SIZE</div>
						<a>
								<img style={{width:'100%'}} src="http://assets.myntassets.com/v1465218039/reactive/bra-guide/bra-guide-band-size.jpg" />
						</a>				
					<div className='textoption1'> The best way is to measure your band size first, just under your breasts and around your chest with a soft tape measure.</div>
					
					<div className='textoption1' style={{backgroundColor:'#e6e6e6', marginBottom:'5px'}}>
						<div style={{marginBottom:'10px'}}>If you get an even number— add 4 inches to find your band size.</div>
						<div>If you get an odd number— add 5 inches to find your band size.</div>
					</div>

					<div style={{color:'#fff', backgroundColor:'#00a99d', padding:'5px', fontSize:'12px', marginBottom:'5px', padding: '2% 10%'}}>
						For example- If you get 31 inches 31+5= 36 inches 
					</div>

				</div>

				<div>
					<div style={{fontWeight:800, fontSize:'18px', padding: '5%', marginBottom:'5px'}}>CUP SIZE</div>
						<a>
								<img style={{width:'100%'}} src="http://assets.myntassets.com/v1465218039/reactive/bra-guide/bra-guide-cup-size.jpg" />
						</a>				
					<div className='textoption1'> For the cup size, you’d have to wrap the measuring tape around the fullest part of your breast, pulling it firmly, but not too tight or loose. Now subtract this measurement from your band size to get your perfect cup size.</div>
					
					<div className='textoption1' style={{backgroundColor:'#e6e6e6', marginBottom:'5px'}}>
						<div style={{marginBottom:'10px'}}>Use the following chart to pick the right cup size:  </div>
						<div>AA= Less than 1″, A=1″, B=2″, C=3′, D=4″, DD=5″..</div>
					</div>

					<div style={{color:'#fff', backgroundColor:'#00a99d', padding:'5px', fontSize:'12px', marginBottom:'5px', padding: '2% 10%' }}>
						For example- If your cup size is 36 inches and band size is 34 inches- you will be a B cup with a size of 34B.
					</div>

				</div>
			</Expander>

			<Expander image="http://assets.myntassets.com/v1465211219/reactive/bra-guide/useful-hacks.jpg">
				<div>
					<div className='textoption1'>1. A well-fitted bra will be tight enough to let you slide two fingers comfortably under the band.</div>
					<div className='textoption1'>2. Always try on a bra under a fitted white tee. If it looks fine then, it will look fine with almost anything else. </div>
					<div className='textoption1'>3. When wearing a new bra, be sure to start with the furthest and loosest hook as the bra will loosen up and stretch over time. </div>
					<div className='textoption1'>4. Your nipple point should be halfway between your shoulder and your elbow when looking at yourself in a mirror, from the side view. If it is lower, it means you’re not wearing the right size.</div>
					<div className='textoption1'>5. Your bra’s underwire must sit flat and not dig into your skin in any way. The centre point of your bra must lay flush against your chest, without gaping.</div>
					<div className='textoption1'>6. We recommend you buy a bra with wider straps if you have a large breast size as they offer both comfort and extra support. </div>
					<div className='textoption1'>7. See if the fit is right by pulling your elbows back to ensure there is no spillage over the cups.</div>

				</div>
			</Expander>

			<Expander image="http://assets.myntassets.com/v1465211218/reactive/bra-guide/caring-for-your-bras.jpg">
				<div>
					<div>
						<a>
							<img style={{width:'100%'}} src="http://assets.myntassets.com/v1465218039/reactive/bra-guide/bra-guide-hand-wash.jpg" />
						</a>
					</div>
					<div className='textoption1'>Always make sure to hand wash your bras as this will ensure they will last longer. If washing them in a machine, use the gentle cycle and wash them inside a garment bag. Air-dry your bras as excess heat will cause the fabric to stretch out and even tear, over a period of time.</div>
					
				</div>
			</Expander>		

			
			<div style={{color:'#fff', backgroundColor:'#00a99d', padding:'5px', fontSize:'14px', fontWeight:600, marginTop:'10%', textAlign: 'center' }}><a href="http://www.myntra.com/bras?SRC=Radium" target="_blank"> SHOP BRAS </a> </div>
	
			</div>
		);

	}
}