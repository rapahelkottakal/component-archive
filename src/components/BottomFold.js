import React from 'react';

export default class BottomFold extends React.Component {

	render() {

		const css = {
			container: {
				marginTop: 16,
				marginBottom: 16,
				position: 'relative'
			},
			text: {
				backgroundColor: this.props.backgroundColor,
				textAlign: 'center',
				padding: 16,
				borderTopLeftRadius: 25,
				borderTopRightRadius: 25,
				margin: '0 27px',
				fontSize: 13,
				lineHeight: 1.5
			},
			rightCorner: {
				position: 'absolute',
				bottom: 0,
				right: 0
			},
			leftCorner: {
				transform: 'scaleX(-1)',
				position: 'absolute',
				bottom: 0,
				left: 0
			}	
		};

		return(
			<div style={css.container}>
				<div style={css.text}>{this.props.text}</div>
				<img style={css.rightCorner} src={this.props.cornerImage} />
				<img style={css.leftCorner} src={this.props.cornerImage} />
			</div>
		);
	}
}