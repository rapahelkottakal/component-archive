import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			// overflowX: 'hidden',
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

				</div>
				
			</div>			
		);

	}

}