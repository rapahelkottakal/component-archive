import React from 'react';
import _ from 'lodash';

export default class SplitSlider extends React.Component {

	constructor() {
		super();
		this.state = {
			position: 50,
			touche0x: null,
			touche0y: null,
			touche1x: null,
			touche1y: null,
			touche2x: null,
			touche2y: null,
			touche3x: null,
			touche3y: null,
			touche4x: null,
			touche4y: null,

		}
	}

	handleClick(e) {
		// console.log('Clicked', e);
		// console.log('X', e.clientX);
		// console.log('Y', e.clientY);
		// console.log('Width', e.target.parentElement.offsetWidth);

		let width = e.target.parentElement.offsetWidth,
			x = e.touches[0].clientX,
			spliterWidth = Math.round(x / width * 100);

		// console.log(e.touches);

		let setObject = {
			position: spliterWidth,
			touche0x: e.touches[0].clientX,
			touche0y: e.touches[0].clientY,

		}

		if (e.touches[1]) {
			_.assignIn(setObject, {
				touche1x: e.touches[1].clientX,
				touche1y: e.touches[1].clientY
			});
		}

		if (e.touches[2]) {
			_.assignIn(setObject, {
				touche2x: e.touches[2].clientX,
				touche2y: e.touches[2].clientY
			});
		}

		if (e.touches[3]) {
			_.assignIn(setObject, {
				touche3x: e.touches[3].clientX,
				touche3y: e.touches[3].clientY
			});
		}

		if (e.touches[4]) {
			_.assignIn(setObject, {
				touche4x: e.touches[4].clientX,
				touche4y: e.touches[4].clientY
			});
		}

		this.setState(setObject);
	}

	handleMove(e) {
		console.log('touch', e.touches[0].clientX);
	}

	render() {

		let outsideWrapper = {
			width: '100%',
			backgroundColor: 'white',
			position: 'relative'
		}

		let imageStyle = {
			width: '100%',
			height: 'auto',
			display: 'block'
		}

		let afterImage = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: this.state.position + '%',
			height: '100%',
			backgroundImage: 'url('+ this.props.after +')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}

		return(
				<div>
					<div style={outsideWrapper} onTouchStart={this.handleClick.bind(this)} onTouchMove={this.handleClick.bind(this)}  >
						<img style={imageStyle} src={this.props.before} />
						<div style={afterImage}></div>
					</div>
					<div>T0 X - {this.state.touche0x}</div>
					<div>T0 Y - {this.state.touche0y}</div>
					<div>T1 X - {this.state.touche1x}</div>
					<div>T1 Y - {this.state.touche1y}</div>
					<div>T2 X - {this.state.touche2x}</div>
					<div>T2 Y - {this.state.touche2y}</div>
					<div>T3 X - {this.state.touche3x}</div>
					<div>T3 Y - {this.state.touche3y}</div>
					<div>T4 X - {this.state.touche4x}</div>
					<div>T4 Y - {this.state.touche4y}</div>

				</div>

		);
	}
}