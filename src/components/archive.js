import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ShowMore from './showMore';
import ImageChild from './imageChild';

export default class Archive extends React.Component {

	componentDidMount() {

		const pastels = new Image,
			blues = new Image,
			reds = new Image;

		pastels.src = 'http://assets.myntassets.com/v1465207263/radium/SIS/home-store/pastels.jpg';
		blues.src = 'http://assets.myntassets.com/v1465207263/radium/SIS/home-store/blues-and-greens.jpg';
		reds.src = 'http://assets.myntassets.com/v1465207309/radium/SIS/home-store/reds-and-maroons.jpg';
	}


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
			banner: {
				color: '#fff',
				textAlign: 'center',
				padding: '16px 32px',
				backgroundImage: 'url(http://assets.myntassets.com/v1465196058/radium/SIS/home-store/Home-colour-guide.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom right'
				// background: '#3fd1ff',
				// background: '-moz-linear-gradient(left, #3fd1ff 0%, #00c5e9 25%, #0081aa 100%)',
				// background: '-webkit-linear-gradient(left, #3fd1ff 0%,#00c5e9 25%,#0081aa 100%)',
				// background: 'linear-gradient(to right, #3fd1ff 0%,#00c5e9 25%,#0081aa 100%)',
				// filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fd1ff', endColorstr='#0081aa',GradientType=1 )"
			},
			title: {
				marginTop: 8,
				fontSize: 20,
				fontFamily: 'Lora, serif'
			},
			hr: {
				width: 	32,
				borderBottom: '1px solid',
				marginBottom: 8
			},
			text: {
				marginBottom: 16
			},
			shop: {
				textDecoration: 'none',
				textTransform: 'uppercase',
				fontSize: 16,
				letterSpacing: 5,
				color: '#fff',
				display: 'block',
				textAlign: 'center',
				background: '#3fd1ff',
				background: '-moz-linear-gradient(left, #3fd1ff 0%, #00c5e9 25%, #0081aa 100%)',
				background: '-webkit-linear-gradient(left, #3fd1ff 0%,#00c5e9 25%,#0081aa 100%)',
				background: 'linear-gradient(to right, #3fd1ff 0%,#00c5e9 25%,#0081aa 100%)',
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fd1ff', endColorstr='#0081aa',GradientType=1 )"
			}
		}


		return(
			<div style={this.getContainerStyles()}>

				<div>

					<div style={css.banner}>
						<div style={{
							fontSize: 32,
							fontFamily: 'Lora, serif'
						}}>Complementary</div>
						<div style={{
							fontSize: 20,
							letterSpacing: 7,
							paddingLeft: 6,
							textTransform: 'uppercase'
						}}>Colour guide</div>
						<div style={{
							margin: '16px 0',
							borderBottom: '1px solid #fff'
						}}></div>
						<div style={{
							padding: '0 8px',
							fontSize: 13
						}}>Here’s a simple guide that decodes colour pairing and helps you find the perfect bedsheets for your room.</div>
					</div>

					<div style={{
						fontSize: 13,
						textAlign: 'center',
						textDecoration: 'underline',
						textTransform:'uppercase',
						padding: '16px 0'
					}}><strong>Pick your wall colour</strong></div>

					<ShowMore>
						<ImageChild
							image="http://assets.myntassets.com/v1465192599/radium/SIS/home-store/cream-n-white-big-min.png"
							width="25%"
							text="Creams & Whites"
						>
							<div style={{padding: '0 16px'}}>
								<img src="http://assets.myntassets.com/v1465207302/radium/SIS/home-store/whites.jpg"/>
								<div style={css.title}><span style={{color: '#bca38a'}}>Colour pairings</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #bca38a',
									marginBottom: 8
								}}></div>
								<div style={css.text}>All colours including bright hues like fuchsia or turquoise blue, darker shades like blacks and browns and muted tones like pastels.</div>

								<div style={css.title}><span style={{color: '#bca38a'}}>Style</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #bca38a',
									marginBottom: 8
								}}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Make a statement by choosing sheets in a bright colour with an ethnic all-over print that adds a certain artsy touch to your room.<br/><br/>
									<strong>Minimal chic</strong>- Elegant floral prints on sheets with a cream or white base are sure to add a charming touch. If florals aren't your thing, go for minimalistic stripes in black and white that are always on trend.
								</div>

								<div style={css.title}><span style={{color: '#bca38a'}}>Tips</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #bca38a',
									marginBottom: 8
								}}></div>
								<div style={css.text}>A shade like a light lemon yellow adds a calming aura to your room.</div>
							</div>
							<a href="http://www.myntra.com/bedsheets?userQuery=true&f=Prints_and_Patterns_article_attr%3Ageometric%2Cprints%2520(others)%2Csoild%2520or%2520self%2520design%2Cstripes&SRC=Radium" target="_blank" style={{
								textDecoration: 'none',
								textTransform: 'uppercase',
								fontSize: 16,
								letterSpacing: 5,
								color: '#fff',
								display: 'block',
								textAlign: 'center',
								backgroundColor: '#bca38a'
							}}>Shop collection</a>

						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1465192600/radium/SIS/home-store/pastels-big-min.png"
							width="25%"
							text="Pastels"
						>
							<div style={{padding: '0 16px'}}>
								<img src="http://assets.myntassets.com/v1465207263/radium/SIS/home-store/pastels.jpg"/>
								<div style={css.title}><span style={{color: '#8eb8ba'}}>Colour pairings</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #8eb8ba',
									marginBottom: 8
								}}></div>
								<div style={css.text}>Sea greens, pastels, blues, bright pinks, bright oranges, yellows.</div>

								<div style={css.title}><span style={{color: '#8eb8ba'}}>Style</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #8eb8ba',
									marginBottom: 8
								}}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Pairing pale blue walls with bright sea greens works wonders to add a touch of contrast.<br/><br/>
									<strong>Minimal chic</strong>- If you want to keep the tone of your room minimalistic go for bed sheets in the same colour family as the predominant room colour.
								</div>

								<div style={css.title}><span style={{color: '#8eb8ba'}}>Tips</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #8eb8ba',
									marginBottom: 8
								}}></div>
								<div style={css.text}>When you have predominantly light shades in your room you can pair them with hues that are starkly in contrast to add depth to the space.</div>
							</div>
							<a href="http://www.myntra.com/bedsheets?userQuery=true&f=colour%3Ablue%2Ccoral%2Clavender%2Corange%2Cpeach%2Cpink%2Csea%2520green%2Cyellow&SRC=Radium" target="_blank" style={{
								textDecoration: 'none',
								textTransform: 'uppercase',
								fontSize: 16,
								letterSpacing: 5,
								color: '#fff',
								display: 'block',
								textAlign: 'center',
								backgroundColor: '#8eb8ba'
							}}>Shop collection</a>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1465192599/radium/SIS/home-store/blues-and-greens-big-min.png"
							width="25%"
							text="Blues & Greens"
						>
							<div style={{padding: '0 16px'}}>
								<img src="http://assets.myntassets.com/v1465207263/radium/SIS/home-store/blues-and-greens.jpg"/>
								<div style={css.title}><span style={{color: '#50c2b2'}}>Colour pairings</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #50c2b2',
									marginBottom: 8
								}}></div>
								<div style={css.text}>Creams, whites, blues, greens.</div>

								<div style={css.title}><span style={{color: '#50c2b2'}}>Style</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #50c2b2',
									marginBottom: 8
								}}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Match the colour of your sheets to the predominant room colours.<br/><br/>
									<strong>Minimal chic</strong>- Tone down bright colours with neutral-coloured sheets in creams and whites with geometric prints or stripes.
								</div>

								<div style={css.title}><span style={{color: '#50c2b2'}}>Tips</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #50c2b2',
									marginBottom: 8
								}}></div>
								<div style={css.text}>Play with textures and colours in the same family to add a nice touch to your room.</div>
							</div>
							<a href="http://www.myntra.com/bedsheets?userQuery=true&f=colour%3Ablue%2Ccream%2Cgreen%2Cwhite&SRC=Radium" target="_blank" style={{
								textDecoration: 'none',
								textTransform: 'uppercase',
								fontSize: 16,
								letterSpacing: 5,
								color: '#fff',
								display: 'block',
								textAlign: 'center',
								backgroundColor: '#50c2b2'
							}}>Shop collection</a>
							
						</ImageChild>
						<ImageChild
							image="http://assets.myntassets.com/v1465192600/radium/SIS/home-store/reds-and-maroon-big-min.png"
							width="25%"
							text="Reds & Maroons"
						>
							<div style={{padding: '0 16px'}}>
								<img src="http://assets.myntassets.com/v1465207309/radium/SIS/home-store/reds-and-maroons.jpg"/>
								<div style={css.title}><span style={{color: '#c8454f'}}>Colour pairings</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #c8454f',
									marginBottom: 8
								}}></div>
								<div style={css.text}>Whites, greys, creams, blacks.</div>

								<div style={css.title}><span style={{color: '#c8454f'}}>Style</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #c8454f',
									marginBottom: 8
								}}></div>
								<div style={css.text}>
									<strong>Experimental</strong>-  Go for black and white stripes or geometric prints. Play it up with ethnic prints in complementary colours from the red family.<br/><br/>
									<strong>Minimal chic</strong>- Pair the bright reds or deep maroons with greys, creams and whites.
								</div>

								<div style={css.title}><span style={{color: '#c8454f'}}>Tips</span></div>
								<div style={{
									width: 	32,
									borderBottom: '1px solid #c8454f',
									marginBottom: 8
								}}></div>
								<div style={css.text}>These shades can make any room look rich so make the reds stand out by playing with contrasting colours.</div>
							</div>
							<a href="http://www.myntra.com/bedsheets?userQuery=true&f=colour%3Ablack%2Ccharcoal%2Ccream%2Cgreen%2Cgrey%2Coff%2520white%2Cwhite&SRC=Radium" target="_blank" style={{
								textDecoration: 'none',
								textTransform: 'uppercase',
								fontSize: 16,
								letterSpacing: 5,
								color: '#fff',
								display: 'block',
								textAlign: 'center',
								backgroundColor: '#c8454f'
							}}>Shop collection</a>
							
						</ImageChild>
					</ShowMore>


				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}