import React from 'react';
import {Motion, spring} from 'react-motion';

import _ from 'lodash';

export default class ShowMore extends React.Component {

	// componentDidMount() {

	// 	_.forEach(this.props.children, (value,key) => {
			
	// 		console.log(this.props.children[key]);

	// 		// this.props.children[key].props = _.assignIn(value.props, {test: this.closeShowMore});

	// 		value.props['onClick'] = this.closeShowMore;

	// 	});



	// }

	constructor(props) {
		super(props);

		this.state = {
			currentChild: -1,
			open: false
		}
	}

	getContainerStyles() {

		let style = {
			
		}

		return style;
	}

	getRowStyles() {

		let style = {
			
		}

		// if (this.state.fliped) {
		// 	_.assignIn(style, {
		// 		transform: 'rotateY(180deg)',
		// 		WebkitTransform: 'rotateY(180deg)',
		// 		msTransform: 'rotateY(180deg)'
		// 	})
		// }

		return style;

	}


	getOpenStyles() {
		
		let style = {
			display: 'none',
			padding: '15px 25px',
			backgroundColor:'#F7F7F7'
		}

		if (this.state.open) {
			_.assignIn(style, {
				display: 'block'
			})
		}

		return style;
	}


	openShowMore() {
		this.setState({
			open: true
		});
	}

	closeShowMore() {
		this.setState({
			open: false
		});
	}

	changeCurrentChild(key) {

		this.setState({
			currentChild: key
		});

		if (this.state.open && this.state.currentChild == key) {
			this.closeShowMore();
		} else {
			this.openShowMore();
		}
	}

	createImageRow() {

		let imageRow = [];

		_.forEach(this.props.children, (value,key) => {
					
			// console.log(value.props.image);

			if (this.state.currentChild != key && this.state.open) {

				imageRow.push(<img src={value.props.image} style={{ width: value.props.width, height: 'auto', opacity: 0.5, display: 'inline-block' }} key={key} onClick={this.changeCurrentChild.bind(this,key)} />);
			} else {

				imageRow.push(<img src={value.props.image} style={{ width: value.props.width, height: 'auto', opacity: 1, display: 'inline-block' }} key={key} onClick={this.changeCurrentChild.bind(this,key)} />);
			}

		});

		return imageRow;
	}

	createInsideContent() {

		if (this.state.open) {
			return this.props.children[this.state.currentChild].props.children	
		}

	}


	render() {

		// console.log(this.props.children);

		return(
			<div style={this.getContainerStyles()} >
				<div style={this.getRowStyles()}>
					{this.createImageRow()}
				</div>
	            <div style={this.getOpenStyles()}>
		           	
		           	{this.createInsideContent()}

				</div>
			</div>
		);
	}
}