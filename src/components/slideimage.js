import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import {Motion, spring} from 'react-motion';

injectTapEventPlugin();


export default class Slideimage extends React.Component{
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

	handleMouseDown() {
		this.setState({open: !this.state.open});
	}	

	handleTouchStart(e) {
		e.preventDefault();
		this.handleMouseDown();
	}

	afterImageStyle(){
		return{
			// backgroundImage: 'url(http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg)',
			backgroundRepeat: 'no-repeat',
			cursor: 'pointer',
			position: 'relative'
		}
	}




	handleOpen() {
			 this.setState({open: true});
	}

	handleClose(){
			this.setState({open: false});
	}





	render(){


		const actions = [
			<FlatButton
				label="Back"
				secondary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Shop Now"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>,
    	];


		return(
			<div style={{ position:'relative'}}>
				<h3 style={this.textStyles()}>{this.props.textonimage} </h3>
				


				<div style={ this.afterImageStyle() }
						onClick={this.handleMouseDown.bind(this)}
						onTouchStart={this.handleTouchStart}>
						<img src = {this.props.beforeImage} style={{ width: '100%'}} />	
				
					<Motion style={{x: spring(this.state.open ? 100 : 0)}}>
			          {({x}) =>
			            // children is a callback which should accept the current value of
			            // `style`

			            <div className= "bgimage" style={{ width: x + '%', height: '100%', overflow: 'hidden', position: 'absolute', top: '0%' }}>
							<img src = {this.props.afterImage} style={{ width: '100%', height: '100%'}} />
						</div>
			          }
			        </Motion>
				</div>

				<div>
					<RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
					<Dialog
					  title="Dialog With Actions"
					  actions={actions}
					  modal={false}
					  open={this.state.open}
					  onRequestClose={this.handleClose}
					>
					  The actions in this window were passed in as an array of React objects.
					</Dialog>
				</div>


			</div>

		);
	}
}