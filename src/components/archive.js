import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import BottomFold from './BottomFold';

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

					<BottomFold
						text="Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric."
						cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
						backgroundColor="#FFADB9"
					/>

					<BottomFold
						text="Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric."
						cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
						backgroundColor="#FFADB9"
					/>

				</div>
			</div>			
		);

	}

}