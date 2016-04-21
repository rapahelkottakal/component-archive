import React from 'react';
import Slider from 'react-slick';

import { forEach } from 'lodash';

import '../css/slider.css';

export default class SlideGroup extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);

		this.state = {
			data: props.sliderData
		}
	}

	createSlide(object) {
		return (<a href={object.link} target="_blank"><img src={object.img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} /></a>)
	}

	createSliders(object) {
		console.log(object.slides.length);

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

		return (
			<Slider {...settings}>
				<img src={object.img} style={{ width: '100%', height: 'auto' }} />
				forEach(object.slides, slide => this.createSlide(slide));
			</Slider>
		);
	}

		render() {

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

			return(
				<div>
					<div style={{ backgroundColor: this.state.data[0].bgColor}}>
						<img src={this.state.data[0].img} style={{ width: '100%', height: 'auto' }} />
						<Slider {...settings}>
								<a href={this.state.data[0].slides[0].link} target="_blank"><img src={this.state.data[0].slides[0].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} /></a>
						        <a href={this.state.data[0].slides[1].link} target="_blank"><img src={this.state.data[0].slides[1].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} /></a>
						        <a href={this.state.data[0].slides[2].link} target="_blank"><img src={this.state.data[0].slides[2].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }}/></a>
						</Slider>
					</div>
					<div style={{ backgroundColor: this.state.data[2].bgColor}}>
						<img src={this.state.data[2].img} style={{ width: '100%', height: 'auto' }} />
						<Slider {...settings}>
								<a href={this.state.data[2].slides[0].link} target="_blank"><img src={this.state.data[0].slides[0].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} /></a>
						        <a href={this.state.data[2].slides[1].link} target="_blank"><img src={this.state.data[0].slides[1].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }} /></a>
						        <a href={this.state.data[2].slides[2].link} target="_blank"><img src={this.state.data[0].slides[2].img} style={{ width: '100%', height: 'auto', boxShadow: 'hsla(0, 0%, 90%, 1) 4px 4px 20px 5px' }}/></a>
						</Slider>
					</div>
				</div>
			);
		}
}