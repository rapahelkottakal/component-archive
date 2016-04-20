import React from 'react';

export default class Archive extends React.Component {

	getWrapperStyles() {
		return {
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			display: 'table'
		}
	}

	getStyles() {
		return {
			padding: this.props.padding ? parseInt(this.props.padding) : 15,
			display: 'table-cell',
			textAlign: 'center',
			verticalAlign: 'middle'
		}
	}

	render() {

		return(
			<div style={this.getWrapperStyles()}>
				<div style={this.getStyles()}>
					{this.props.children}
				</div>
			</div>
		);
	}
}