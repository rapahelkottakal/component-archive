import React from 'react';
import _ from 'lodash';

export default class PinchZoom extends React.Component {

	constructor() {
		super();
		this.state = {
			size: 100,
			firstPoint: null,
			panStart: {
				x: null,
				y: null
			},
			panPositionX: 50,
			panPositionY: 50,
			change: null,
			touche0x: null,
			touche0y: null,
			touche1x: null,
			touche1y: null,

		}
	}

	handleTap(e) {

		if (e.touches[0] && !e.touches[1]) {
			let t0x = e.touches[0].clientX,
				t0y = e.touches[0].clientY

			this.setState({
				panStart: {
					x: t0x,
					y: t0y
				}
			});
		}

		if (e.touches[0] && e.touches[1]) {

			let t0x = e.touches[0].clientX,
				t0y = e.touches[0].clientY,
				t1x = e.touches[1].clientX,
				t1y = e.touches[1].clientY,
				firstPoint = Math.sqrt(Math.pow(t0x - t1x, 2) + Math.pow(t0y - t1y, 2));

			this.setState({
				firstPoint
			});
		}
	}

	handleMove(e) {

		let setObject = {
			touche0x: e.touches[0].clientX,
			touche0y: e.touches[0].clientY,

		}

		if (e.touches[1]) {
			_.assignIn(setObject, {
				touche1x: e.touches[1].clientX,
				touche1y: e.touches[1].clientY
			});
		}


		if (e.touches[0] && !e.touches[1]) {
			// e.preventDefault();
			let diffX = this.state.panStart.x - e.touches[0].clientX,
				diffY = this.state.panStart.y - e.touches[0].clientY,
				newPositionX = this.state.panPositionX + diffX/10,
				newPositionY = this.state.panPositionY + diffY/10;
			console.log('X ', diffX);
			if (newPositionX <= 0) {
				_.assignIn(setObject, {
					panPositionX: 0
				});
			} else if(newPositionX >= 100) {
				_.assignIn(setObject, {
					panPositionX: 100
				});
			} else {
				_.assignIn(setObject, {
					panPositionX: newPositionX
				});
			}

			console.log('Y ', diffY);
			if (newPositionY <= 0) {
				_.assignIn(setObject, {
					panPositionY: 0
				});
			} else if(newPositionY >= 100) {
				_.assignIn(setObject, {
					panPositionY: 100
				});
			} else {
				e.preventDefault()
				_.assignIn(setObject, {
					panPositionY: newPositionY
				});
			}
		}

		console.log(setObject)



		if (e.touches[0] && e.touches[1]) {

			let t0x = e.touches[0].clientX,
				t0y = e.touches[0].clientY,
				t1x = e.touches[1].clientX,
				t1y = e.touches[1].clientY,
				distance = Math.sqrt(Math.pow(t0x - t1x, 2) + Math.pow(t0y - t1y, 2)),
				change = distance / this.state.firstPoint / 10,
				size = Math.ceil(this.state.size * distance / this.state.firstPoint);

			_.assignIn(setObject, {
				change
			});

			if (size < 100) {
				_.assignIn(setObject, {
					size: 100
				});
			} else if(size > 200) {
				_.assignIn(setObject, {
					size: 200
				});
			} else {
				_.assignIn(setObject, {
					size
				});
			}
			
		}
		this.setState(setObject);
	}

	render() {

		let windowWidth = window.innerWidth;

		let outsideWrapper = {
			width: '100%',
			height: windowWidth * this.props.ratio,
			backgroundColor: 'white',
			position: 'relative',
			backgroundPositionX: this.state.panPositionX + '%',
			backgroundPositionY: this.state.panPositionY + '%',
			backgroundImage: 'url('+ this.props.image +')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: this.state.size + '%'
		}

		return(
				<div>
					<div style={outsideWrapper} onTouchStart={this.handleTap.bind(this)} onTouchMove={this.handleMove.bind(this)}  >
					</div>
					<div>T0 X - {this.state.touche0x}</div>
					<div>T0 Y - {this.state.touche0y}</div>
					<div>T1 X - {this.state.touche1x}</div>
					<div>T1 Y - {this.state.touche1y}</div>
					<div>First Point - {this.state.firstPoint}</div>
					<div>Change - {this.state.change}</div>

				</div>

		);
	}
}