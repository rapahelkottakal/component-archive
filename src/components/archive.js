import React from 'react';

import 'normalize.css/normalize.css';

import '../css/main.css';

import Textonimage from './text-on-image'
import Title from './title';

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


	// getTextPositionStyles() {
	// 	return {

	// 		position: 'absolute',
	// 		top: 10,
	// 		left: 50,
	// 		width: '100%',
	// 	}
	// }


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

					<Textonimage src ="http://assets.myntassets.com/v1460639223/Lookgood/Feed/Style-tips/april16/14/download.jpg"
						text = "hi this is varun"
						color = "red"
						
						>

					</Textonimage>

					<Textonimage src ="http://assets.myntassets.com/v1460639223/Lookgood/Feed/Style-tips/april16/14/download.jpg"
						text = "hi tasdfvarun"
						color = "red"
						
						>

					</Textonimage>

					<Textonimage src ="http://assets.myntassets.com/v1460639223/Lookgood/Feed/Style-tips/april16/14/download.jpg"
						text = "hi thisasdfarun"
						textPosition = "left"//center / left-top /right-bot
						
						>

					</Textonimage>
				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}