import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import sliderGroupData from '../data/slider-group';
import SliderGroup from './slide-group';


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
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};

		return(
			<div style={this.getContainerStyles()}>

				<div>

					<SliderGroup data={sliderGroupData}></SliderGroup>


				</div>
				
			</div>

		);

	}
		

}