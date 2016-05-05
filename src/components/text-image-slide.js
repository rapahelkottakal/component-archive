import React from 'react';

import {Motion, spring} from 'react-motion';

export default class TextImageSlide extends React.Component{
	constructor(){
		super();
		this.state = { open: false };	
	}
	textStyles(){
		return {
			backgroundColor: 'rgb(45, 62, 78)',
			width: '100%',
			color:'#fff',
			padding: '2% 0',
			textAlign: 'center',
			margin: 0
		}
	}
	SlideTextStyles(){
		return {
			backgroundColor: '#75C6E1',
			width: '100%',
			color:'#fff',
			padding: '10% 0',
			textAlign: 'center',
			margin: 0,
			width: '100%',
			height: '100%'
		}
	}

	handleMouseDown() {
		this.setState({open: !this.state.open});
	}

	afterImageStyle(){
		return{
			// backgroundImage: 'url(http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg)',
			backgroundRepeat: 'no-repeat',
			cursor: 'pointer',
			position: 'relative'
		}
	}


	render(){
		return(
			<div style={{ position:'relative'}}>
				

				<div style={ this.afterImageStyle() }
						onClick={this.handleMouseDown.bind(this)}>
						<img src = {this.props.imageUrl} style={{ width: '100%'}} />	
				
					<Motion style={{x: spring(this.state.open ? 100 : 0)}}>
			          {({x}) =>
			            <div className= "bgimage" style={{
			                WebkitTransform: `translate(${x}%, 0)`,
			                transform: `translate(${x}%, 0)`,
			                height: '100%', overflow: 'hidden', position: 'absolute', top: '0%', width: '100%', left: '-100%'
				        }} >
							<h3 style= {this.SlideTextStyles()}>  {this.props.backsidetext} </h3>
						</div>
			          }
			        </Motion>
				</div>

			</div>

		);
	}
}