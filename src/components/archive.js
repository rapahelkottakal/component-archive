import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Textonimage from './text-on-image'
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


	// getTextPositionStyles() {
	// 	return {

	// 		position: 'absolute',
	// 		top: 10,
	// 		left: 50,
	// 		width: '100%',
	// 	}
	// }


	render() {

		// console.log('test', sliderGroupData);


		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};

		return(
			<div style={this.getContainerStyles()}>

				<div>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463547769/radium/SIS/lyla-loves/Lyla-Loves-logo-unit.jpg" width="100%" height="auto" />
					<Title 
						text="Lyla Loves is a UK-based accessories brand that is famous for marrying bohemian themes with a strong sense of individuality. Their dreamy yet unique designs are what set them apart from the rest."
						font= "Open Sans"
						color="#494949"
						size="15"
						padding="3% 5% 9%"
						align="center"
					/>	

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463655780/radium/SIS/lyla-loves/earrings.jpg" width="100%" height="auto" />
					

					<img style={{display: 'block', float:'left'}} src="http://assets.myntassets.com/v1463655839/radium/SIS/lyla-loves/ear-cuffs.jpg" width="50%" height="auto" />
					<img style={{display: 'block', float:'left'}} src="http://assets.myntassets.com/v1463655839/radium/SIS/lyla-loves/drops.jpg" width="50%" height="auto" />
					


					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463655891/radium/SIS/lyla-loves/nekclaces.jpg" width="100%" height="auto" />

					<img style={{display: 'block', marginBottom:'11%'}} src="http://assets.myntassets.com/v1463655923/radium/SIS/lyla-loves/necklaces-images.jpg" width="100%" height="auto" />


					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550131/radium/SIS/lyla-loves/Things-to-watch-out-for.jpg" width="100%" height="auto" />


					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550181/radium/SIS/lyla-loves/midi-rings.jpg" width="100%" height="auto" />
					<Title 
						text="Stylish and delicate, midi rings add a boho-chic touch to any look instantly.  "
						font= 'Open Sans'
						color="#494949"
						size="15"
						padding="1% 14% 9%"
						align="left"
					/>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550292/radium/SIS/lyla-loves/statement-rings.jpg" width="100%" height="auto" />
					<Title 
						text="Make a statement, literally! These neckpieces are a sure head-turner."
						font= "Open Sans"
						color="#494949"
						size="15"
						padding="1% 10% 9%"
						align="right"
					/>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550371/radium/SIS/lyla-loves/shoulder-duster.jpg" width="100%" height="auto" />
					<Title 
						text="These tasseled beauties will up your glam quotient by several notches. "
						font= "Open Sans"
						color="#494949"
						size="15"
						padding="1% 14% 9%"
						align="left"
					/>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550432/radium/SIS/lyla-loves/bracelets.jpg" width="100%" height="auto" />
					<Title 
						text="Dainty bracelets are all the rage. You can never go wrong with this one!"
						font= "Open Sans"
						color="#494949"
						size="15"
						padding="1% 10% 9%"
						align="right"
					/>






					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463562367/radium/SIS/lyla-loves/gold-arrow.jpg" width="100%" height="auto" />
					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463547941/radium/SIS/lyla-loves/decoding-the-logo.jpg" width="100%" height="auto" />
					<Title 
						text="The logo includes elements that represents a strong woman with a powerful sense of uniqueness. She has a dreamcatcher hand chain, butterflies in her hair, an elemental tattoo on her arm, arrows in her hand, turquoise head chain and feather earrings. Here’s what each one means."
						font= "Open Sans"
						color="#494949"
						size="15"
						padding="3% 5% 9%"
						align="center"
					/>

					<Textonimage src ="http://assets.myntassets.com/v1463548260/radium/SIS/lyla-loves/butterflies.png"
						text = "They signify change, rebirth and also new beginnings."
						textPosition = "left" >
					</Textonimage>

					<Textonimage src ="http://assets.myntassets.com/v1463549562/radium/SIS/lyla-loves/feathers.png"
						text = "They symbolise evolution, wisdom and a sense of freedom. "
						textPosition = "right" >
					</Textonimage>

					<Textonimage src ="http://assets.myntassets.com/v1463549470/radium/SIS/lyla-loves/arrows.png"
						text = "Individually they symbolise defence and protection. A bundle of arrows denote strength."
						textPosition = "customeTop"
						cTop={40} >
					</Textonimage>

					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463549973/radium/SIS/lyla-loves/elemental-symbols.png" width="100%" height="auto" />

					<Title 
						text="They show all the qualities a person needs to possess. Fire stands for strength, earth means practicality, air is for thoughtfulness and water means emotions."
						font= 'Open Sans'
						color="#494949"
						size="15"
						padding="1% 40% 2% 6%"
						align="right"
						margin="-30% 0 0 0"
					/>

					<Textonimage src ="http://assets.myntassets.com/v1463549919/radium/SIS/lyla-loves/dreamcathcer.png"
						text = "They are a symbol of positivity and foster good dreams."
						textPosition = "left" >
					</Textonimage>




					<img style={{display: 'block'}} src="http://assets.myntassets.com/v1463550063/radium/SIS/lyla-loves/Turquoise.png" width="100%" height="auto" />

					<Title 
						text="It’s a healing stone. And the blue colour of the stone is supposed to bring happiness and good fortune, especially when given as a gift."
						font= 'Open Sans'
						color="#494949"
						size="15"
						padding="3% 43% 2% 6%"
						align="right"
						margin="-30% 0 0 0"
					/>

					
					<a href="http://www.myntra.com/lyla-loves?SRC=Lookgood6"> 
					<img style={{display: 'block', marginBottom: '10%'}} src="http://assets.myntassets.com/v1463556750/radium/SIS/lyla-loves/explore-collection.jpg" width="100%" height="auto" />
					</a>
				</div>				
			</div>
		);
	}
}