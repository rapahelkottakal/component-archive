import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import BottomFold from './BottomFold';
import ThreeRoundDivs from './ThreeRoundDivs';

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

					<ThreeRoundDivs
						round1Width="45%"
						title1="HACK 3"
						text1="Always try on a bra under a fitted white tee. If it looks fine then, it will look fine with almost anything else."
						round2Width="45%"
						title2="HACK 4"
						text2="A well-fitted bra will be tight enough to let you slide two fingers comfortably under the band."
						round3Width="45%"
						title3="HACK 5"
						text3="When wearing a new bra, be sure to start with the furthest and loosest hook as the bra will loosen up and stretch over time."
					/>

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