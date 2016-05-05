import React from 'react';
import _ from 'lodash';

export default class Expander extends React.Component {

	constructor() {
		super();
		this.state = {
			open: false
		}
	}


	getOpenerStyles() {
		let style = {
			display: 'none'
		}

		if (this.state.open) {
			_.assignIn(style, {
				display: 'block'
			})
		}

		return style;
	}


	handelClick() {
		this.setState({
			open: !this.state.open
		});
	}


	render() {

		return(
				<div>
					<img src={this.props.image} style={{width: '100%', display: 'block'}} onClick={this.handelClick.bind(this)} />
					<div style={this.getOpenerStyles()}>
						{this.props.children}
					</div>
				</div>
		);
	}
}