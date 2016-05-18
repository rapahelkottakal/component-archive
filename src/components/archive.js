import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ShowMore from './showMore';
import ImageChild from './imageChild';


export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			// backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	render() {

		let linedTitle = {
			textTransform: 'uppercase',
			textAlign: 'center',
			borderTop: '1px solid lightgray',
			borderBottom: '1px solid lightgray',
			margin: '16px 0',
			padding: '4px 0',
			fontSize: 12
		}

		return(
			<div style={this.getContainerStyles()}>

				<div>


					<div style={linedTitle}>Maxi dress</div>
					<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463564895/radium/SIS/footwear-guide/maxidress-min.jpg" />
					<div style={linedTitle}>Pick your shoe &raquo;</div>
					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1463564894/radium/SIS/footwear-guide/ballerinas-min.jpg"
							width="33.33%"
						>
							<div>0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>

						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1463564894/radium/SIS/footwear-guide/strappyflats-min.jpg"
							width="33.33%"
						>
							<div>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1463564893/radium/SIS/footwear-guide/espadrilles-min.jpg"
							width="33.33%"
						>
							<div>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>
							
						</ImageChild>
					</ShowMore>



				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}