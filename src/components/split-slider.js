import React from 'react';
import _ from 'lodash';

export default class SplitSlider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			position: props.split

		}
	}

	handleClick(e) {

		let width = e.target.parentElement.offsetWidth,
			x = e.touches[0].clientX,
			spliterWidth = Math.round(x / width * 100);


		this.props.setSplitState(spliterWidth);
	}

	// handleMove(e) {
	// 	console.log('touch', e.touches[0].clientX);
	// }


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
			width: this.props.split + '%',
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

				</div>

		);
	}
}