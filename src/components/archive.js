import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Title from './title';


export default class Archive extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			backgroundImage: 'url(http://assets.myntassets.com/v1463475227/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-printed-background.png)',
			backgroundColor: 'black',
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

				<div style={{display: 'block'}}>

					<img style={{display: 'block', margin: '4% 0px 11%'}} src="http://assets.myntassets.com/v1463475001/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-header.png" width="100%" height="auto" />

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-1-image1.jpg" width="100%" height="auto" />
					
					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463474983/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-rustic-charm.png" width="100%" height="auto" />

					<Title 
						text="Exude old world elegance by pairing a halter neck blouse with an ethnic skirt in earthy hues."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0',fontFamily: 'Open Sans',fontSize: '16px', color: 'rgb(198, 161, 58)', float:'right', width:'80%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-1-image2.jpg" width="100%" height="auto" />
					
					<Title 
						text="Tie up your hair in a bun and accessorise with a head chain. And yes, don't forget the bindi!"
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-1-image3.jpg" width="100%" height="auto" />

					<a href="http://www.myntra.com/rustic-charm?SRC=Radium" target="_blanck"><img style={{display: 'block', margin: ' 7% 0 16%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-shop-button.png" width="100%" height="auto" /></a>







					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463478290/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-2-image1.jpg" width="100%" height="auto" />
					
					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463478290/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-festive-brights.png" width="100%" height="auto" />

					<Title 
						text="A flared anarkali in a sunny shade is a great pick for summer festivities."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0',fontFamily: 'Open Sans',fontSize: '16px', color: 'rgb(198, 161, 58)', float:'right', width:'80%'}} src="http://assets.myntassets.com/v1463478290/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-2-image2.jpg" width="100%" height="auto" />
		
					<Title 
						text="Play perfect match with a silver statement necklace. The much needed traditional touch comes from a sleek bun adorned with flowers."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463478290/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-2-image3.jpg" width="100%" height="auto" />

					<a href="http://www.myntra.com/festive-brights?SRC=Radium" target="_blanck"><img style={{display: 'block', margin: ' 7% 0 16%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-shop-button.png" width="100%" height="auto" /></a>





					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479157/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-3-image1.jpg" width="100%" height="auto" />
					
					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479157/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-vibrant-vibes.png" width="100%" height="auto" />

					<Title 
						text="Celebrate the magic of colours by layering a bright ethnic jacket over an embellished kurta and palazzos."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0',fontFamily: 'Open Sans',fontSize: '16px', color: 'rgb(198, 161, 58)', float:'right', width:'80%'}} src="http://assets.myntassets.com/v1463479157/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-3-image2.jpg" width="100%" height="auto" />
		
					<Title 
						text="Braid your hair and finish off the look with gold and pearl earrings."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479157/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-3-image3.jpg" width="100%" height="auto" />

					<a href="http://www.myntra.com/vibrant-vibes?SRC=Radium" target="_blanck"><img style={{display: 'block', margin: ' 7% 0 16%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-shop-button.png" width="100%" height="auto" /></a>

					



					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479475/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-4-image1.jpg" width="100%" height="auto" />
					
					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479475/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-ethereal-elegance.png" width="100%" height="auto" />

					<Title 
						text="Look timeless in a brocade silk saree."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0',fontFamily: 'Open Sans',fontSize: '16px', color: 'rgb(198, 161, 58)', float:'right', width:'80%'}} src="http://assets.myntassets.com/v1463479475/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-4-image2.jpg" width="100%" height="auto" />
		
					<Title 
						text="Complement it with a pair of your trusted jhumkas and a dainty neckpiece. Nothing more, nothing less!"
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479475/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-4-image3.jpg" width="100%" height="auto" />

					<a href="http://www.myntra.com/ethereal-elegance?SRC=Radium" target="_blanck"><img style={{display: 'block', margin: ' 7% 0 16%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-shop-button.png" width="100%" height="auto" /></a>

					





					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479842/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-5-image1.jpg" width="100%" height="auto" />
					
					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479842/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-pastel-traditions.png" width="100%" height="auto" />

					<Title 
						text="Give your ethnic look an understated twist with a lehenga in pastel colours."
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0',fontFamily: 'Open Sans',fontSize: '16px', color: 'rgb(198, 161, 58)', float:'right', width:'80%'}} src="http://assets.myntassets.com/v1463479842/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-5-image2.jpg" width="100%" height="auto" />
		
					<Title 
						text="Go easy on the accessories and make-up. A stunning maang tikka is just what you need to stand out!"
						font= "Open Sans"
						color="#c6a13a"
						size="16"
						padding="1% 8% 1% 20%"
						align="left"
					/>

					<img style={{display: 'block', margin: '4% 0'}} src="http://assets.myntassets.com/v1463479843/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-5-image3.jpg" width="100%" height="auto" />

					<a href="http://www.myntra.com/pastel-traditions?SRC=Radium" target="_blanck"><img style={{display: 'block', margin: ' 7% 0 16%'}} src="http://assets.myntassets.com/v1463474984/Lookgood/Feed/Look%20Book/may-16/17th/ethnic-look-book-shop-button.png" width="100%" height="auto" /></a>
				</div>				
			</div>
		);
	}
}