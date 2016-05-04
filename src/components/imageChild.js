import React from 'react';
import _ from 'lodash';

export default class ImageChild extends React.Component {

	constructor() {
		super();
		this.state = {
			faded: false
		}
	}

	getContainerStyles() {

		let style = {
			perspective: 1000,
			// width: 320,
			// height: 480
		}

		return style;
	}

	getFlipperStyles() {
		let style = {
			transformStyle: 'preserve-3d',
			position: 'relative',
			transition: '0.6s'
		}

		if (this.state.fliped) {
			_.assignIn(style, {
				transform: 'rotateY(180deg)',
				WebkitTransform: 'rotateY(180deg)',
				msTransform: 'rotateY(180deg)'
			})
		}

		return style;
	}

	getFrontStyles() {

		let style = {
			zindex: 2,
			// width: 320,
			// height: 480,
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			transform: 'rotateY(0deg)',
			WebkitTransform: 'rotateY(0deg)',
			msTransform: 'rotateY(0deg)'
		}

		return style;
	}

	getImageStyles() {

		let style = {
			width: this.props.width,
			height: 'auto'
		}

		if (this.state.faded) {
			_.assignIn(style, {
				opacity: 0.7
			})
		}

		return style;
	}

	handelClick() {
		this.setState({
			faded: true
		});
	}

	toggleOpacity() {
		this.setState({
			faded: !this.state.faded
		});
	}

	handelShop() {
		window.open(this.props.link ,'_blank');
	}	


	render() {

		return(
				<img src={this.props.image} style={this.getImageStyles()} onClick={this.toggleOpacity.bind(this)} />
		);
	}
}