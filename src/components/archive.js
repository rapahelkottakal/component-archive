import React from 'react';
import Slider from 'react-slick';

import 'normalize.css/normalize.css';

import '../css/main.css';


import Title from './title';

export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}

	render() {

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

					<Slider {...settings}>
				        <div><img src="http://img.getjar.mobi/ss/6c/833651_3.jpg" style={{ width: '100%', height: 'auto' }} /></div>
				        <div><img src="http://img.getjar.mobi/ss/6c/833651_4.jpg" style={{ width: '100%', height: 'auto' }} /></div>
				        <div><img src="http://img.getjar.mobi/ss/f2/832457.jpg" style={{ width: '100%', height: 'auto' }}/></div>
				      </Slider>
					<Title
						text="Come home to a charm.."
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="right"
						bgColor="gray"
						bgImage="http://fmforums.com/uploads/attachments/monthly_2009_10/Background-tile.gif.11107119f39d13d71f261c93ace94ed2.gif"
					>

						<Title 
							text="Discover style"
							font= "Open Sans"
							color="white"
							size="16"
							padding="0 10px 10px 10px"
							align="right"
						/>
						
					</Title>




				</div>
			</div>
		);
	}
}