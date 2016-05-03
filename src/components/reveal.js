import React from 'react';
import _ from 'lodash';

import AbCenter from './abCenter';

import animate from '../helpers/animate';

export default class Title extends React.Component {

	constructor() {
		super();
		this.state = {
			expanded: false
		}
	}

	getWrapperStyles() {

		return {
			backgroundColor: 'white',
			minHeight: 200,
			position: 'relative'
		}
	}

	getImageStyles() {
		return {
			display: 'block',
			width: '100%',

		}
	}

	getBtnStyles() {

		let width = this.props.btnSize && this.props.btnSize.width ? this.props.btnSize.width : 150,
			height = this.props.btnSize && this.props.btnSize.height ? this.props.btnSize.height : 50,
			btnColor = this.props.btnColor ? this.props.btnColor : 'white',
			btnBgColor = this.props.btnBgColor ? this.props.btnBgColor : 'hsla(0, 0%, 0%, 0.8)',
			contentColor = this.props.contentColor ? this.props.contentColor : 'white',
			contentBgColor = this.props.contentBgColor ? this.props.contentBgColor : 'hsla(40, 100%, 15%, 0.9)';

		let styles = {
			fontSize: 18,
			color: btnColor,
			overflow: 'hidden',
			backgroundColor: btnBgColor,
			top: 0,
			right: 0,
			position: 'absolute',
			width,
			height,
			cursor: 'pointer'
		}

		_.assignIn(styles, animate.transition('0.5s'));
		// Object.assign(styles, animate.transition('0.5s'));

		if (this.state.expanded) {
			_.assignIn(styles, {
				color: contentColor,
				backgroundColor: contentBgColor,
				width: '100%',
				height: '100%'
			});
		}

		return styles;
	}

	getShopStyles() {
		return {
			display: 'inline-block',
			backgroundColor: 'black',
			color: 'white',
			fontWeight: 600,
			padding: '10px 15px',
			marginTop: 20,
			fontSize: 15,
			textDecoration: 'none'

		}
	}

	btnClickHandler() {
		this.setState({
			expanded: !this.state.expanded
		});
	}

	hiddenRender() {

		let btnTxt = this.props.btnTxt ? this.props.btnTxt : 'More...';

		return (
			<div style={this.getWrapperStyles()}>
				<img style={this.getImageStyles()} src={this.props.image} />
				<div style={this.getBtnStyles()} onClick={this.btnClickHandler.bind(this)}>
					<AbCenter>
						{btnTxt}
					</AbCenter>
				</div>
			</div>
		);

	}

	revealedRender() {
		let content = this.props.content ? this.props.content : 'Shop on Myntra.com',
			shopLink = this.props.shopLink ? this.props.shopLink : 'http://myntra.com/',
			shopBtnText = this.props.shopBtnText ? this.props.shopBtnText : 'Shop Now';

		return (
			<div style={this.getWrapperStyles()}>
				<img style={this.getImageStyles()} src={this.props.image} />
				<div style={this.getBtnStyles()} onClick={this.btnClickHandler.bind(this)}>
					<AbCenter padding="30">
							{content}
							<div>
								<a style={this.getShopStyles()} href={shopLink} target="_blank">{shopBtnText}</a>
							</div>
					</AbCenter>

				</div>
			</div>
		);
	}

	render() {


		if (!this.state.expanded) {
			return this.hiddenRender();
		} else {
			return this.revealedRender();
		}
	}
}