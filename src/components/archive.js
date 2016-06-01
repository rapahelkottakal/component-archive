import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';


export default class Archive extends React.Component {

	constructor() {
		super();

		this.state = {
			windowHeight: window.innerHeight
		};

	}	

	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize.bind(this));
	}

	handleResize(e) {
		this.setState({
			windowHeight: window.innerHeight
		});
	}

	getContainerStyles() {
		return {
			minHeight: this.state.windowHeight,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	render() {


		return(
			<div style={this.getContainerStyles()}>

				<div>

					Layering component

				</div>
				
			</div>

		);
	}


	
		

}