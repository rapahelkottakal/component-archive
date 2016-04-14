import React from 'react';

export default class Title extends React.Component {

	getStyles() {

		let font = this.props.font ? this.props.font : 'serif',
			size = this.props.size ? parseInt(this.props.size) : 23,
			color = this.props.color ? this.props.color : '#1E1E1E',
			padding = this.props.padding ? this.props.padding : '10px 15px',
			align = this.props.align ? this.props.align : 'center',
			bgColor = this.props.bgColor,
			bgImage = this.props.bgImage ? 'url(' + this.props.bgImage + ')' : null;

		return {
			fontFamily: font,
			fontSize: size,
			color,
			padding,
			textAlign: align,
			backgroundColor : bgColor,
			backgroundImage: bgImage
		}
	}


	render() {

		return(
				<div style={this.getStyles()}>
					{this.props.text}
					{this.props.children}
				</div>
		);
	}
}