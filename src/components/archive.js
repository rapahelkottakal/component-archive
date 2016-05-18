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
			textTransform: 'uppercase'
		}

		return(
			<div style={this.getContainerStyles()}>

				<div>


					<div style={linedTitle}>Maxi dress</div>
					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1462352818/radium/SIS/fragrance/fruity-menu.jpg"
							width="33.33%"
						>
							<div>0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>

						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462352816/radium/SIS/fragrance/floral-menu.jpg"
							width="33.33%"
						>
							<div>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare lacus et porttitor sollicitudin. Phasellus a eros ac risus elementum efficitur ac in mi. Vivamus dapibus, metus eu viverra scelerisque, sapien nisi cursus neque, eu venenatis erat lectus at enim.</div>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462354162/radium/SIS/fragrance/oceanic-menu.jpg"
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