import React from 'react';
import _ from 'lodash';

export default class FlipCard extends React.Component {

	constructor() {
		super();
		this.state = {
			fliped: false
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

	getBackStyles() {

		let style = {
			width: '100%',
			// height: 480,
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			position: 'absolute',
			top: 0,
			left: 0,
			transform: 'rotateY(180deg)',
			WebkitTransform: 'rotateY(180deg)',
			msTransform: 'rotateY(180deg)'
		}

		return style;
	}

	handelClick() {
		console.log(this);
		this.setState({
			fliped: true
		});
	}

	handelShop() {
		window.open(this.props.link ,'_blank');
	}	


	render() {

		return(
				<div style={this.getContainerStyles()} onClick={this.handelClick.bind(this)}>
					<div style={this.getFlipperStyles()}>
						<div style={this.getFrontStyles()} >
							<img src={this.props.front} style={{width: '100%', display: 'block'}} />
						</div>
						<div style={this.getBackStyles()} onClick={this.handelShop.bind(this)}>
							<img src={this.props.back} style={{width: '100%', display: 'block'}} />
						</div>
					</div>
				</div>
		);
	}
}