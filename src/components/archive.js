import React from 'react';

import 'normalize.css/normalize.css';

import '../css/main.css';


import Title from './title';
import Slideimage from './slideimage';


export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}

	render() {

		return(
			<div style={this.getContainerStyles()}>
				<div>


					<Title
						text="Come home to a charm.."
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="right"
						bgColor="gray"
						bgImage="http://fmforums.com/uploads/attachments/monthly_2009_10/Background-tile.gif.11107119f39d13d71f261c93ace94ed2.gif"
					>

						<Title 
							text="Discover style"
							font= "Open Sans"
							color="white"
							size="16"
							padding="0 10px 10px 10px"
							align="right"
						/>
						
					</Title>

					<Slideimage
					textonimage="Tap to be amazed"
					beforeImage="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg"
					afterImage="http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--8.jpg"
					  />




				</div>
			</div>
		);
	}
}