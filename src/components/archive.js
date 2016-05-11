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

import Scroll from 'react-scroll';

import { Link, Element, Events } from 'react-scroll';

import HScroll from './h-scroll';

import SplitSlider from './split-slider';

import YouTube from 'react-youtube';

export default class Archive extends React.Component {

	componentDidMount() {

		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments);
		});

	}


	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

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

				<HScroll childWidth={100}>
					<Link activeClass="active" className="inactive" style={linkStyle} to="opener" spy={true} offset={-50} smooth={true} duration={500} >Opener</Link>
					<Link activeClass="active" className="inactive" style={linkStyle} to="sliders" spy={true} offset={-50} smooth={true} duration={500} >Sliders</Link>
					<Link activeClass="active" className="inactive" style={linkStyle} to="makeover" spy={true} offset={-50} smooth={true} duration={500} >Makeover</Link>
					<Link activeClass="active" className="inactive" style={linkStyle} to="flipper" spy={true} offset={-50} smooth={true} duration={500} >Flipper</Link>
					<Link activeClass="active" className="inactive" style={linkStyle} to="reveal" spy={true} offset={-50} smooth={true} duration={500} >Reveal</Link>
				</HScroll>
				<div style={{marginTop: 50}}>

					<Element name="opener">
					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1462352818/radium/SIS/fragrance/fruity-menu.jpg"
							width="33.33%"
						>
							<div>0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>

						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462352816/radium/SIS/fragrance/floral-menu.jpg"
							width="33.33%"
						>
							<div>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462354162/radium/SIS/fragrance/oceanic-menu.jpg"
							width="33.33%"
						>
							<div>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>
							
						</ImageChild>
					</ShowMore>
					</Element>

					<Element name="sliders">
					<SliderGroup data={sliderGroupData}></SliderGroup>
					</Element>

					<Element name="makeover">
					<Title
						text="React SIS Pages"
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="right"
						bgColor="slateblue"
						bgImage="http://fmforums.com/uploads/attachments/monthly_2009_10/Background-tile.gif.11107119f39d13d71f261c93ace94ed2.gif"
					>

						<Title 
							text="We can do a lot more."
							font= "Open Sans"
							color="white"
							size="16"
							padding="10px 0 0 0"
							align="right"
						/>
						<Title 
							text="This is only the beginning..."
							font= "Open Sans"
							color="white"
							size="16"
							padding="0px"
							align="right"
						/>
						
					</Title>

					<Slideimage
					textonimage="Tap to be amazed"
					beforeImage="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg"
					afterImage="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--8.jpg"
					  />

					<Popup 
					content = "xxxx" />
					</Element>

					<Element name="flipper">

					<FlipCard
						front="http://assets.myntassets.com/v1461908504/Lookgood/Feed/Vocab/april/woh-cab-chevronprint-feedcard.gif"
						back="http://assets.myntassets.com/v1461908455/Lookgood/Feed/Vocab/april/woh-cab-chevronprint.jpg"
						link="http://www.myntra.com/chevron-print?userQuery=true&f=categories%3ADresses%2CKurtas%2CTops%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen&sort=high&SRC=Lookgood6"
					/>

					</Element>


					<Element name="reveal">
					<Reveal
						image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg"
						btnTxt="Know more"
						// btnSize={{width: 200, height: 100}}
						// btnColor="red"
						// btnBgColor="blue"
						content="The best collection of jeans can be found here. What are you waiting for?"
						// contentColor="yellow"
						contentBgColor="hsla(230, 68%, 52%, 0.9)"
						// shopBtnText="Click me now"
						// shopLink="http://google.com"

					/>
					</Element>


					<SplitSlider
						before="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg" 
						after="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--8.jpg" />

					<YouTube
				        videoId="Yx9N57TbZiI"
				        opts={opts}
				        onReady={this._onReady}
				      />

					<Textonimage src ="http://assets.myntassets.com/v1460639223/Lookgood/Feed/Style-tips/april16/14/download.jpg"
						text = "hi this is varun"
						color = "red"
						
						>

					</Textonimage>

					<Textonimage src ="http://assets.myntassets.com/v1460639223/Lookgood/Feed/Style-tips/april16/14/download.jpg"
						text = "hi thisasdfarun"
						textPosition = "left"//center / left-top /right-bot
						
						>

					</Textonimage>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1460654675/city-tips-background_wy0nwb.jpg" width="100%" height="auto" />

					<Title
						text="Scalable"
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="left"
						bgColor="gray"
						bgImage="http://templatesideas.com/wp-content/uploads/2010/12/Fiber-Carbon-Tiled-Pattern-background-vol.11.jpg"
					>

						<Title 
							text="All these blocks are modular. This means, making any improvements or adding more 'components' to the archive, will be simple for anyone familiar with reactjs."
							font= "Open Sans"
							color="white"
							size="16"
							padding="0px"
							align="left"
						/>
						
					</Title>

					<Reveal
						image="http://static1.squarespace.com/static/5520e514e4b00f468f8d3de4/5645f7a3e4b0abd1d824dfba/565780c9e4b022a250f9f480/1448575197974/cyclist-dribbble.gif"
						// btnTxt="Know more"
						// btnSize={{width: 200, height: 100}}
						// btnColor="red"
						btnBgColor="hsla(0, 100%, 50%, 0.4)"
						// content="The best collection of shoes can be found here."
						// contentColor="yellow"
						// contentBgColor="gray"
						// shopBtnText="Click me now"
						// shopLink="http://google.com"

					/>
					

					<Title
						text="Helping you look good"
						font= "Open Sans"
						size="25"
						color="white"
						padding="20px"
						// align="right"
						bgColor="slateblue"
						bgImage="http://www.uniteourresources.com/wp-content/uploads/2012/07/black_woven_seamless_tile.jpg"
					/>


				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}