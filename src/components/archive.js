import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ShowMore from './showMore';
import ImageChild from './imageChild';

export default class Archive extends React.Component {


	getContainerStyles() {
		return {
			// overflowX: 'hidden',
			minHeight: window.innerHeight,
			// backgroundColor: 'tomato',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}

	render() {

		const css = {
			title: {
				fontSize: 32,
			},
			hr: {
				width: 64,
				borderBottom: '1px solid',
				marginBottom: 16
			},
			text: {
				marginBottom: 32
			}
		}


		return(
			<div style={this.getContainerStyles()}>

				<div>

					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1462352818/radium/SIS/fragrance/fruity-menu.jpg"
							width="25%"
						>
							<div>
								<div style={css.title}>Colour pairings</div>
								<div style={css.hr}></div>
								<div style={css.text}>All colours</div>

								<div style={css.title}>Style</div>
								<div style={css.hr}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Bed sheets in bold hues and pop colours with ethnic or quirky prints<br/>
									<strong>Minimal chic</strong>- Subtle pastels or floral prints 
								</div>

								<div style={css.title}>Tips</div>
								<div style={css.hr}></div>
								<div style={css.text}>A shade like a light lemon yellow adds a calming aura to your room.</div>
							</div>

						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462352816/radium/SIS/fragrance/floral-menu.jpg"
							width="25%"
						>
							<div>
								<div style={css.title}>Colour pairings</div>
								<div style={css.hr}></div>
								<div style={css.text}>Sea greens, pastels, Blues, bright pinks, bright oranges, yellows</div>

								<div style={css.title}>Style</div>
								<div style={css.hr}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Pairing pale blue walls with bright sea greens works wonders to add contrast<br/>
									<strong>Minimal chic</strong>- If you want to keep the tone of your room minimalistic go for bed sheets in the same colour family as the predominant room colour
								</div>

								<div style={css.title}>Tips</div>
								<div style={css.hr}></div>
								<div style={css.text}>When you have predominantly light shades in your room you can pair them with hues that are starkly in contrast to add depth to your room.</div>
							</div>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462354162/radium/SIS/fragrance/oceanic-menu.jpg"
							width="25%"
						>
							<div>
								<div style={css.title}>Colour pairings</div>
								<div style={css.hr}></div>
								<div style={css.text}>Creams, whites, blues, greens</div>

								<div style={css.title}>Style</div>
								<div style={css.hr}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Match the colour of your sheets to the predominant room colours<br/>
									<strong>Minimal chic</strong>- Tone down bright colours with neutral-coloured sheets in creams and whites with geometric prints or stripes 
								</div>

								<div style={css.title}>Tips</div>
								<div style={css.hr}></div>
								<div style={css.text}>Play with textures and colours in the same family to add a nice touch to your room.</div>
							</div>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1462354162/radium/SIS/fragrance/oceanic-menu.jpg"
							width="25%"
						>
							<div>
								<div style={css.title}>Colour pairings</div>
								<div style={css.hr}></div>
								<div style={css.text}>Whites, greys, creams, blacks</div>

								<div style={css.title}>Style</div>
								<div style={css.hr}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Go for black and white stripes or geometric prints. Play it up with ethnic prints in complementary colours in the red family<br/>
									<strong>Minimal chic</strong>- Pair the bright reds or deep maroons with greys, creams and whites
								</div>

								<div style={css.title}>Tips</div>
								<div style={css.hr}></div>
								<div style={css.text}>These shades can make any room look rich so make the reds stand out by playing with contrasting colours.</div>
							</div>
							
						</ImageChild>
					</ShowMore>


				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}