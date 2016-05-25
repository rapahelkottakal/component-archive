import React from 'react';
import Slider from 'react-slick';

import 'normalize.css/normalize.css';
import '../css/main.css';

import SplitSlider from './split-slider';


export default class Archive extends React.Component {


	getContainerStyles() {
		return {
			// overflowX: 'hidden',
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

	_onReady(event) {
		console.log(event);
		// access to player in all event handlers via event.target 
		// event.target.pauseVideo();
	}


	render() {

		// console.log('test', sliderGroupData);


		var settings = {
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

		let linkStyle = {
			display: 'inline-block',
			backgroundColor: 'tomato',
			width: 100,
			height: 50
		};

		const opts = {
	      height: 'auto',
	      width: '100%',
	      playerVars: { // https://developers.google.com/youtube/player_parameters 
	        // autoplay: 1,
	        disablekb: 0,
	        controls: 0,
	        enablejsapi: 1,
	        iv_load_policy: 3,
	        modestbranding: 1,
	        playsinline: 0,
	        rel: 0,
	        showinfo: 0
	      }
	    };

		return(
			<div style={this.getContainerStyles()}>

				<SplitSlider
					before="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-before.jpg" 
					after="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-san-after.jpg" />
			</div>
		);
	}
}