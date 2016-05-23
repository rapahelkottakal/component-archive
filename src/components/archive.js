import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import request from 'superagent';


export default class Archive extends React.Component {

	componentDidMount() {

		console.log('componentDidMount');
	}

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			// backgroundColor: 'tomato',
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

					Test

				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}