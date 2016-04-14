import React from 'react';

import 'normalize.css/normalize.css';

import '../css/main.css';


import Reveal from './reveal';
import Title from './title';


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

		return(
			<div style={this.getContainerStyles()}>
				<div>


					<Title
						text="React SIS Pages"
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="right"
						bgColor="slateblue"
						bgImage="http://fmforums.com/uploads/attachments/monthly_2009_10/Background-tile.gif.11107119f39d13d71f261c93ace94ed2.gif"
					>

						<Title 
							text="We can do a lot more."
							font= "Open Sans"
							color="white"
							size="16"
							padding="10px 0 0 0"
							align="right"
						/>
						<Title 
							text="This is only the beginning..."
							font= "Open Sans"
							color="white"
							size="16"
							padding="0px"
							align="right"
						/>
						
					</Title>


					<Reveal
						image="https://s-media-cache-ak0.pinimg.com/736x/b7/b5/be/b7b5be5c21678b1f53941f229c2b9cdd.jpg"
						// btnTxt="Know more"
						// btnSize={{width: 200, height: 100}}
						// btnColor="red"
						btnBgColor="hsla(0, 100%, 50%, 0.4)"
						// content="The best collection of shoes can be found here."
						// contentColor="yellow"
						// contentBgColor="gray"
						// shopBtnText="Click me now"
						// shopLink="http://google.com"

					/>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1460654675/city-tips-background_wy0nwb.jpg" class="alignnone wp-image-82898" width="100%" height="auto" />

					<Title
						text="Scalable"
						font= "Open Sans"
						size="30"
						color="white"
						padding="20px"
						align="left"
						bgColor="gray"
						bgImage="http://templatesideas.com/wp-content/uploads/2010/12/Fiber-Carbon-Tiled-Pattern-background-vol.11.jpg"
					>

						<Title 
							text="All these blocks are modular. This means, making any improvements or adding more 'components' to the archive, will be simple for anyone familiar with reactjs."
							font= "Open Sans"
							color="white"
							size="16"
							padding="0px"
							align="left"
						/>
						
					</Title>

					<Reveal
						image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg"
						btnTxt="Know more"
						// btnSize={{width: 200, height: 100}}
						// btnColor="red"
						// btnBgColor="blue"
						content="The best collection of jeans can be found here. What are you waiting for?"
						// contentColor="yellow"
						contentBgColor="hsla(230, 68%, 52%, 0.9)"
						// shopBtnText="Click me now"
						// shopLink="http://google.com"

					/>

					<Title
						text="Helping you look good"
						font= "Open Sans"
						size="25"
						color="white"
						padding="20px"
						// align="right"
						bgColor="slateblue"
						bgImage="http://www.uniteourresources.com/wp-content/uploads/2012/07/black_woven_seamless_tile.jpg"
					/>

				</div>
			</div>
		);
	}
}