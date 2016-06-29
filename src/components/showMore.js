import React from 'react';
import {Motion, spring} from 'react-motion';

import _ from 'lodash';

import Scroll from 'react-scroll';

import { Link, Element, Events } from 'react-scroll';

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
			padding: '0 8px'
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
			textAlign:'center'
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

		let imageRow = [],
			textStyle = {
				textAlign: 'center',
				textTransform: 'uppercase',
				fontSize: 10
			};

		_.forEach(this.props.children, (value,key) => {
					
			// console.log(value.props.image);

			if (this.state.currentChild != key && this.state.open) {

				imageRow.push(
					<Link to={this.props.name} offset={-190} smooth={true} style={{ width: value.props.width, height: 'auto', display: 'inline-block', verticalAlign: 'top'}} key={key}>
						<img 
							src={value.props.image}
							style={{ width: '100%', height: 'auto', opacity: 0.5, padding: '15px 15px 2px 15px' }}
							onClick={this.changeCurrentChild.bind(this,key)} />
						<div style={textStyle}>{value.props.title}</div>
					</Link>
					);
			} else {

				imageRow.push(
					<Link to={this.props.name} offset={-190} smooth={true} style={{ width: value.props.width, height: 'auto', display: 'inline-block', verticalAlign: 'top'}} key={key}>
						<img src={value.props.image}
							style={{ width: '100%', height: 'auto', opacity: 1, padding: '15px 15px 2px 15px' }}
							onClick={this.changeCurrentChild.bind(this,key)} />
						<div style={textStyle}>{value.props.title}</div>
					</Link>
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
			<Element name={this.props.name} style={this.getContainerStyles()} >
				<div style={this.getRowStyles()}>
					{this.createImageRow()}
				</div>
	            <div style={this.getOpenStyles()}>
		           	
		           	{this.createInsideContent()}

				</div>
			</Element>
		);
	}
}