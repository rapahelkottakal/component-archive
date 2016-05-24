import React from 'react';
import _ from 'lodash';

export default class SplitSlider extends React.Component {

	constructor() {
		super();
		this.state = {
			position: 50,
			onfirsttap:true,
			touche0x: null,
			touche0y: null

		}
	}

	handleClick(e) {
		// console.log('Clicked', e);
		// console.log('X', e.clientX);
		// console.log('Y', e.clientY);
		// console.log('Width', e.target.parentElement.offsetWidth);

		let width = e.target.parentElement.offsetWidth,
			x = e.touches[0].clientX,
			spliterWidth = Math.round(x / width * 100),
			textToslide = 'slide';

		// console.log(e.touches);

		let setObject = {
			position: spliterWidth,
			touche0x: e.touches[0].clientX,
			touche0y: e.touches[0].clientY,

		}

		if (e.onfirsttap == 'true') {
			_.assignIn(setObject, {		
				onfirsttap: 'slide'
			});
		}else{
			_.assignIn(setObject, {			
				onfirsttap: "slide"
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

		let sliderText = {
			position: 'absolute',
		    top: '40%',
		    left: '50%',
		    zIndex: 9999,
		    backgroundColor: '#FD60E1',
		    color: '#fff',
		    fontSize: '16px',
		    display: 'block',
		    width: '56px',
		    height: '30px',
		    textAlign: 'center',
		    verticalAlign: 'middle',
		    paddingTop: '5px',
		    marginLeft: '-28px',
		    marginTop: '-15px',
		}

		let afterImage = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: this.state.position + '%',
			maxWidth: '100%',
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
						<div style={sliderText}>{this.state.onfirsttap}</div>
					</div>

				</div>

		);
	}
}