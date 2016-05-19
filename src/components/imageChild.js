import React from 'react';
import _ from 'lodash';

export default class ImageChild extends React.Component {

	constructor() {
		super();
		this.state = {
			faded: false
		}
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

	toggleOpacity() {
		this.setState({
			faded: !this.state.faded
		});
	}	


	render() {

		return(
				<img src={this.props.image} style={this.getImageStyles()} onClick={this.toggleOpacity.bind(this)} />
		);
	}
}