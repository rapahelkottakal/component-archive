import React from 'react';

import {Motion, spring} from 'react-motion';



export default class Popup extends React.Component{
	// constructor(){
	// 	super();
	// 	this.state = { open: false };	
	// }
	render(){
		return(
			<div>

			{this.props.content} 
				
			</div>
		);
	}
}