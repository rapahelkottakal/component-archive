import React from 'react';
import _ from 'lodash';

export default class HScroll extends React.Component {

	render() {

		let topWrapper = {
			// overflowX: 'hidden',
			// position: 'fixed',
			// top: 0,
			// left: 0
		}

		let outsideWrapper = {
			width: '100%',
			backgroundColor: 'white',
			position: 'fixed',
			overflowX: 'scroll',
			zIndex: 99999
		}

		let insideWrapper = {
			width:this.props.children.length * this.props.childWidth
		}

		return(
					<div style={outsideWrapper}>
						<div style={insideWrapper}>
							{this.props.children}
						</div>
					</div>

		);
	}
}