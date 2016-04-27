import React from 'react';
import Slider from 'react-slick';

import { forEach } from 'lodash';

import '../css/slider.css';

export default class SlideGroup extends React.Component {

	createSlide(slides) {
		let sliderGroup = slides.map((slide, key) => {
			return (
				<a key={key} href={slide.link} target="_blank">
					<img src={slide.img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} />
				</a>
			)
		});

		return sliderGroup;
	}

	createSliders(object) {
		let settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false
		}

		let sliders = this.props.data.map((sliders, key) => {

			
			return (
				<div key={key} style={{ backgroundColor: sliders.bgColor}}>
					<img src={sliders.img} style={{ width: '100%', height: 'auto' }} />
					<Slider {...settings}>
							{this.createSlide(sliders.slides)}
					</Slider>
				</div>
			);
		});

		return sliders;
	}

		render() {

			return(
				<div>
					{this.createSliders()}
				</div>
			);
		}
}