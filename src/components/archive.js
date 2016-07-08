import React from 'react';
import Slider from 'react-slick';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Scroll from 'react-scroll';

import { Link, Element, Events } from 'react-scroll';

import SplitSlider from './split-slider';

import Ga from '../helpers/Ga';

export default class Archive extends React.Component {

	constructor() {
		super();

		let key, keyTitle, before, after, text, dayLink, nightLink;
		key = 'Round';
		keyTitle = 'Round face';
		before = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-round-night-min.jpg";
		after = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-round-day-min.jpg";
		text = "Add length to your face with lovely drop earrings. Go for long, angular designs that’ll give your face more definition and steer away from circular discs and hoops.";
		dayLink = "http://www.myntra.com/tear-drop-earings-for-day?SRC=Radium";
		nightLink = "http://www.myntra.com/chandelier-earrings-for-night?SRC=Radium";
		this.state = {
			key,
			keyTitle,
			before,
			after,
			text,
			split: 50

		}
	}

	componentDidMount() {

		this.setSplitter();

		Events.scrollEvent.register('begin', function() {
			// console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			// console.log("end", arguments);
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
			backgroundColor: '#B5B5B5',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}

	handelShopBtnClick(e) {

		// console.log(e.target.closest('a'));
		Ga({ label: e.target.closest('a').href });
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
		// console.log(event);
		// access to player in all event handlers via event.target 
		// event.target.pauseVideo();
	}

	setSplitter(event) {

		let key, keyTitle, before, after, text, dayLink, nightLink;

		

		if (event && event.target.tagName == "DIV") {
			key = event.target.innerHTML;
			// console.log(key);
		} else if (event && event.target.tagName == "IMG") {
			key = event.target.alt;
			// console.log(key);
		} else if(event && event.target.tagName == "A") {
			key = event.target.getAttribute('data-key')
			// console.log(event.target.tagName);
		}

		if (key) {

			Ga({ label: 'Face shape: ' + key});
		}


		switch(key) {
			case 'Diamond':
				before = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-diamond-night-min.jpg";
				after = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-diamond-day-min.jpg";
				text = "Long earrings with soft curves are great to soften the definition around the jawline. Steer clear of diamond shaped and other geometric danglers that don’t complement the angles of your face.";
				dayLink = "http://www.myntra.com/jewellery-guide?f=Type_article_attr%3Aear%2520cuff%3A%3Acategories%3AEarrings&SRC=Radium";
				nightLink = "http://www.myntra.com/jewellery-guide-shoulder-duster-earrings?SRC=Radium";
				keyTitle = "Diamond-shaped face"
				break;
			case 'Heart':
				before = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-heart-night-min.jpg";
				after = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-heart-day-min.jpg";
				text = "Go for earrings with elongated curves that highlight your striking cheekbones. You might want to stay clear of hoops, tiny studs and other rounded designs that could make your face seem wider.";
				dayLink = "http://www.myntra.com/jewellery-guide-drop-earrings-for-day?SRC=Radium";
				nightLink = "http://www.myntra.com/jewellery-guide?f=Type_article_attr%3Ajhumkas%3A%3Acategories%3AEarrings&SRC=Radium";
				keyTitle = "Heart-shaped face"
				break;
			case 'Oval':
				before = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-oval-night-min.jpg";
				after = "http://assets.myntassets.com/v1463469185/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-oval-day-min.jpg";
				text = "You’re the luckiest one of the lot because you can wear all types of earrings! Earrings only enhance your face shape and make your features look sharper. Choose from a wide variety of studs as well as danglers.";
				dayLink = "http://www.myntra.com/jewellery-guide?f=Type_article_attr%3Astuds%3A%3Acategories%3AEarrings&SRC=Radium";
				nightLink = "http://www.myntra.com/jewellery-guide?f=Type_article_attr%3Achandbali%3A%3Acategories%3AEarrings&SRC=Radium";
				keyTitle = "Oval face"
				break;
			case 'Square':
				before = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-sqaure-night-min.jpg";
				after = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-square-day-min.jpg";
				text = "Go for rounded designs that soften your cheekbones and jawline. Stick to the narrower, slimmer varieties though, as wide ones might make your face seem broader.";
				dayLink = "http://www.myntra.com/jewellery-guide-thin-hoops-fora-day?SRC=Radium";
				nightLink = "http://www.myntra.com/jewellery-guide-slim-danglers-for-night?SRC=Radium";
				keyTitle = "Square face"
				break;
			default:
				before = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-round-night-min.jpg";
				after = "http://assets.myntassets.com/v1463469186/radium/SIS/jewellery-faceshape/jewellery-face-shape-guide-round-day-min.jpg";
				text = "Add length to your face with lovely drop earrings. Go for long, angular designs that’ll give your face more definition and steer away from circular discs and hoops.";
				dayLink = "http://www.myntra.com/jewellery-guide-tear-drop-earings-for-day?SRC=Radium";
				nightLink = "http://www.myntra.com/jewellery-guide-chandelier-earrings-for-night?SRC=Radium";
				keyTitle = "Round face"
				break;
		}

		this.setState({
			key,
			keyTitle,
			before,
			after,
			text,
			dayLink,
			nightLink,
			split: 50
		});
		
	}

	setSplitState(percent) {
		this.setState({
			split: percent
		});
	}

	renderSplitter() {
		return (
			<SplitSlider
				setSplitState={this.setSplitState.bind(this)}
				before={this.state.before}
				after={this.state.after}
				split ={this.state.split}
			/>
		)
	}

	render() {

		let linkStyle = {
			display: 'table',
			paddingLeft: 50,
			width: '100%',
			height: 'auto'
		};

		let thumb = {
			display: 'table-cell',
			width: '100%',
			height: 'auto'
		}

		let thumbText = {
			display: 'table-cell',
			verticalAlign: 'middle',
			paddingLeft: 32,
			width: '70%',
			fontSize: 16,
			color: '#fff',
			textTransform: 'uppercase'
		}

		let textStyle = {
			backgroundColor: '#fff',
			fontSize: 13,
			lineHeight: '16px',
			textAlign: 'center',
			padding: 16,
			color: '#525252'
		}

		let topStyle = {
			display: 'block',
			textAlign: 'center',
			padding: 16,
			textTransform: 'uppercase',
			color: '#fff'
		}

		let shopBtn = {
			display: 'block',
			fontSize: 14,
			letterSpacing: 2,
			textDecoration: 'none',
			width: '80%',
			padding: 4,
			textTransform: 'uppercase',
			color: '#fff',
			margin: '0 auto',
			backgroundColor: '#B5B5B5',

		}

		let shopBtnWrapper = {
			paddingTop: 8,
			backgroundColor: '#fff',
			display: 'inline-block',
			textAlign: 'center',
			width: '50%'
		}

		let titleStyle = {
			backgroundColor: '#fff',
			textTransform: 'uppercase',
			color: '#4D4C4D',
			fontWeight: 600,
			textAlign: 'center',
			letterSpacing: 2,
			padding: '8px 0'
		}

		return(
			<div style={this.getContainerStyles()}>
				<Element name="top" style={{marginBottom: 16}}>
					<div style={{textAlign: 'center', color: '#fff', textTransform: 'uppercase', letterSpacing: 2, paddingTop: 32}}>Choose your</div>
					<div style={{textAlign: 'center', color: '#fff', textTransform: 'uppercase', letterSpacing: 2, fontSize: 32}}>Face shape</div>
					<hr style={{borderTop: '1px solid #fff'}} width="30%" />
					<Link style={linkStyle} data-key="Round" to="active" spy={true} smooth={true} duration={500} onClick={this.setSplitter.bind(this)} >
						<img src="http://assets.myntassets.com/v1463138629/SIS/jewellery-faceshape/jewellery-face-shape-guide-round-min.jpg"
							alt="Round"
							
							style={thumb} />
						<div style={thumbText}>Round</div>
					</Link>
					<Link style={linkStyle} data-key="Square" to="active" spy={true} smooth={true} duration={500} onClick={this.setSplitter.bind(this)} >
						<img src="http://assets.myntassets.com/v1463139489/SIS/jewellery-faceshape/jewellery-face-shape-guide-square-min.jpg"
						alt="Square"
						
						style={thumb}/>
						<div style={thumbText}>Square</div>
					</Link>
					<Link style={linkStyle} data-key="Oval" to="active" spy={true} smooth={true} duration={500} onClick={this.setSplitter.bind(this)} >
						<img src="http://assets.myntassets.com/v1463138629/SIS/jewellery-faceshape/jewellery-face-shape-guide-oval-min.jpg"
						alt="Oval"
						style={thumb}/>
						<div style={thumbText}>Oval</div>
					</Link>
					<Link style={linkStyle} data-key="Heart" to="active" spy={true} smooth={true} duration={500} onClick={this.setSplitter.bind(this)} >
						<img src="http://assets.myntassets.com/v1463138629/SIS/jewellery-faceshape/jewellery-face-shape-guide-heart-min.jpg"
						alt="Heart"
						style={thumb}/>
						<div style={thumbText}>Heart</div>
					</Link>
					<Link style={linkStyle} data-key="Diamond" to="active" spy={true} smooth={true} duration={500} onClick={this.setSplitter.bind(this)} >
						<img src="http://assets.myntassets.com/v1463138629/SIS/jewellery-faceshape/jewellery-face-shape-guide-diamond-min.jpg"
						alt="Diamond"
						style={thumb}/>
						<div style={thumbText}>Diamond</div>
					</Link>
				</Element>

				<Element name="active">
					<div style={titleStyle}>{this.state.keyTitle}</div>
					{this.renderSplitter()}
					<div style={shopBtnWrapper}>
						<a onClick={this.handelShopBtnClick} target="_blank" href={this.state.dayLink} style={shopBtn}>Shop <strong>day</strong></a>
					</div>
					<div style={shopBtnWrapper}>
						<a onClick={this.handelShopBtnClick} target="_blank" href={this.state.nightLink} style={shopBtn}>Shop <strong>night</strong></a>
					</div>
					<div style={textStyle}>{this.state.text}</div>
				</Element>

				<Link style={topStyle} to="top" spy={true} smooth={true} duration={500} >
					Go back
				</Link>			
				
			</div>
			
		
				
				



		);

	}


	
		

}