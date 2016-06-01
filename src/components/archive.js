import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import layeringData from '../data/layered';
import Layering from './Layering';


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
					<p>This page contains three looks. Tap the articles on the right to reveal the layered looks.</p>
					<p><strong>Note:</strong> This is a test page.</p>
					<Layering imgData={layeringData.anarkali} />
					<Layering imgData={layeringData.ethnicSkirt} />
					<Layering imgData={layeringData.longKurtas} />
				</div>
				
			</div>

		);
	}


	
		

}