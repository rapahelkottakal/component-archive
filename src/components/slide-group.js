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

		// console.log(this);
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

			// console.log(sliders.slides.length);
			if(sliders.slides.length < 2) {
				_.assignIn(settings, { infinite: false, autoplay: false } );
			}

			else {

				_.assignIn(settings, { infinite: true, autoplay: true } );				
			}


			if(sliders.slides.length < 2) {

				return (
					<div key={key} style={{ backgroundColor: sliders.bgColor}}>
						<img src={sliders.img} style={{ width: '100%', height: 'auto' }} />
						<Slider {...settings}>
								{this.createSlide(sliders.slides)}
						</Slider>
					</div>
				);
			} else {

				return (
					<div key={key} style={{ backgroundColor: sliders.bgColor}}>
						<img src={sliders.img} style={{ width: '100%', height: 'auto' }} />
						<div style={{position: 'relative'}}>
							<div style={{ position: 'absolute', top: '35%', left: 0, fontSize: 32, paddingLeft: 4, zIndex: 99, color: '#B2B2B2' }}>&lsaquo;</div>
							<Slider {...settings}>
									{this.createSlide(sliders.slides)}
							</Slider>
							<div style={{ position: 'absolute', top: '35%', right: 0, fontSize: 32, paddingRight: 4, zIndex: 99, color: '#B2B2B2' }}>&rsaquo;</div>
						</div>
					</div>
				);
			}
			
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