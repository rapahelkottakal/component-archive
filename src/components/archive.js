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

		const css = {
			bottomFold: {
				container: {
					marginTop: 16,
					position: 'relative'
				},
				text: {
					backgroundColor: '#FFADB9',
					textAlign: 'center',
					padding: 16,
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					margin: '0 27px',
					fontSize: 13,
					lineHeight: 1.5
				},
				rightCorner: {
					position: 'absolute',
					bottom: 0,
					right: 0
				},
				leftCorner: {
					transform: 'scaleX(-1)',
					position: 'absolute',
					bottom: 0,
					left: 0
				}
			}	
		}

		return(
			<div style={this.getContainerStyles()}>
				<div>

					<div style={css.bottomFold.container}>
						<div style={css.bottomFold.text}>Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric.</div>
						<img style={css.bottomFold.rightCorner} src="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg" />
						<img style={css.bottomFold.leftCorner} src="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg" />
					</div>
					<div style={css.bottomFold.container}>
						<div style={css.bottomFold.text}>Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric.</div>
						<img style={css.bottomFold.rightCorner} src="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg" />
						<img style={css.bottomFold.leftCorner} src="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg" />
					</div>
				</div>
			</div>			
		);

	}

}