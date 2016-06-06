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
			currentChild: 0,
			open: true
		}
	}

	getContainerStyles() {

		let style = {
			
		}

		return style;
	}

	getRowStyles() {

		let style = {
			padding: '0 16px'
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
			padding: '15px 0'
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
			// this.closeShowMore();
		} else {
			this.openShowMore();
		}
	}

	createImageRow() {

		let imageRow = [];

		_.forEach(this.props.children, (value,key) => {
					
			// console.log(value.props.image);

			if (this.state.currentChild != key && this.state.open) {

				imageRow.push(
					<div style={{width: value.props.width, height: 'auto', display: 'inline-block', textAlign: 'center', verticalAlign: 'top'}} key={key}>
						<img src={value.props.image} style={{ width: '100%', height: 'auto', padding: 10, display: 'block' }} onClick={this.changeCurrentChild.bind(this,key)} />
						<div style={{fontSize: 11}}>{value.props.text}</div>
					</div>
					);
			} else {

				imageRow.push(
					<div style={{width: value.props.width, height: 'auto', display: 'inline-block', textAlign: 'center'}} key={key}>
						<img src={value.props.image} style={{ width: '100%', height: 'auto', padding: 0, display: 'block' }} onClick={this.changeCurrentChild.bind(this,key)} />
						<div style={{fontSize: 11}}><strong>{value.props.text}</strong></div>
					</div>
					);
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