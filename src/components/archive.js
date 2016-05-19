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
			fontSize: 12,
			letterSpacing: 2
		},
			showMoreTitle = {
				fontSize: 25,
				fontFamily: 'Lora, serif',
				textTransform: 'uppercase',
		},
			showMoreText = {
				fontStyle: 'italic',
				fontSize: 12
		},
			showMoreShop = {
				textTransform: 'uppercase',
				fontSize: 10,
				backgroundColor: '#000',
				color: '#fff',
				display: 'inline-block',
				padding: '4px 8px',
				marginTop: 8,
				letterSpacing: 2,
				textDecoration: 'none'
		};

		let showMoreTextObj = {
			trendsetter: 'You\'re stylish and you know it! You don\'t shy away from trying the latest trends and always make them your own.',
			classic: 'Your style is timeless, just like you. You never seem to disappoint with your elegant fashion sensibilities.',
			contemporary: 'Urban is your middle name. You lean more towards chic styles with clean cuts.',
			girlNextDoor: 'Your innate sense of femininity is both endearing and impressive. You like anything that is fuss-free and comfortable.',
			tomboy: 'True to your tomboyish personality, you like to keep things casual. You always pick comfort over style, but hey! Isn’t sports luxe a raging trend?',
			relaxed: 'You put comfort above all else. But that doesn’t mean the latest trends are ignored. Your style can be summed up as casual-chic.',
			artsy: 'You seek inspiration in everything around you. No wonder your sense of style reflects your inclination towards all things artistic.',
			elegant: 'People look up to you for your impeccable sense of style. You have great taste and a knack for picking out classy stuff.'

		}

		return(
			<div style={this.getContainerStyles()}>

				<div>

					<div>
						<div style={linedTitle}>Formal trouser & shirt</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463650375/radium/SIS/footwear-guide/Model.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="formal">
							<ImageChild
								image="http://assets.myntassets.com/v1463648769/radium/SIS/footwear-guide/Mocassins.jpg"
								width="33.33%"
								title="Mocassins"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463648363/radium/SIS/footwear-guide/Ballerinas.jpg"
								width="33.33%"
								title="Ballerinas"
							>
								<div>
									<div style={showMoreTitle}>Classic</div>
									<div style={showMoreText}>{showMoreTextObj.classic}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463653904/radium/SIS/footwear-guide/Brogues.jpg"
								width="33.33%"
								title="Solid brogues"
							>
								<div>
									<div style={showMoreTitle}>Contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Maxi dress</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463654593/radium/SIS/footwear-guide/Models.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="maxi">
							<ImageChild
								image="http://assets.myntassets.com/v1463654593/radium/SIS/footwear-guide/Sandals.jpg"
								width="33.33%"
								title="Laser-cut sandals"
							>
								<div>
									<div style={showMoreTitle}>Contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654593/radium/SIS/footwear-guide/StrappyFlats.jpg"
								width="33.33%"
								title="Strappy flats"
							>
								<div>
									<div style={showMoreTitle}>Artsy</div>
									<div style={showMoreText}>{showMoreTextObj.artsy}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654593/radium/SIS/footwear-guide/Espadrilles.jpg"
								width="33.33%"
								title="Printed espadrilles"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Jeans & T-shirt</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463654962/radium/SIS/footwear-guide/Model-jeans-shirts.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="jeans">
							<ImageChild
								image="http://assets.myntassets.com/v1463654929/radium/SIS/footwear-guide/hightops.jpg"
								width="33.33%"
								title="high-tops"
							>
								<div>
									<div style={showMoreTitle}>Tomboy</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654929/radium/SIS/footwear-guide/StripedBallerinas.jpg"
								width="33.33%"
								title="striped ballerinas"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.artsy}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654929/radium/SIS/footwear-guide/Strappy.jpg"
								width="33.33%"
								title="strappy flats"
							>
								<div>
									<div style={showMoreTitle}>Girl-next-door</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/shoes" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>


				</div>
				
			</div>
			
		
				
				



		);

	}


	
		

}