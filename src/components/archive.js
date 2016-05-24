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
								title="loafers & moccasins"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Pattern_article_attr%3Acolour%2520block%2Csolid%3A%3AShoe_Type_article_attr%3Aloafers%2520%252F%2520mocassins%3A%3ASurface_Ornamentation_article_attr%3Abows%2Claser%2520cuts%2Ctassels&sort=popularity&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
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
									<a href="http://www.myntra.com//women-flats?f=Occasion_article_attr%3Adaily%2520%252F%2520casual%2Ceveryday%2Cwork%2520wear%3A%3APattern_article_attr%3Asolid%3A%3AShoe_Type_article_attr%3Aballerina%2520%252F%2520flat%2520shoes%3A%3Acolour%3Abeige%2Cblack%2Cbrown%2Ccharcoal%2Ccream%2Cgrey%2Cnavy%2Cnavy%2520blue%2Cnude%2Cpeach%2Crust%2Ctan%2Cwhite&sort=popularity&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463653904/radium/SIS/footwear-guide/Brogues.jpg"
								width="33.33%"
								title="brogues"
							>
								<div>
									<div style={showMoreTitle}>Contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Shoe_Type_article_attr%3Abrogues&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
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
									<a href="http://www.myntra.com/women-flats?f=Shoe_Type_article_attr%3At-strap%2520%252F%2520thong%2520sandals%3A%3ASurface_Ornamentation_article_attr%3Alaser%2520cuts&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
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
									<a href="http://www.myntra.com/women-flats?f=Occasion_article_attr%3Aethnic%2520-%2520festive%3A%3AShoe_Type_article_attr%3At-strap%2520%252F%2520thong%2520sandals&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
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
									<a href="http://www.myntra.com/women-casual-shoes?f=Pattern_article_attr%3Aprinted%3A%3AShoe_Type_article_attr%3Aespadrilles&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
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
									<div style={showMoreText}>{showMoreTextObj.tomboy}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Ankle_Height_article_attr%3Ahigh%2520tops&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654929/radium/SIS/footwear-guide/StripedBallerinas.jpg"
								width="33.33%"
								title="striped ballerinas"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/women-flats?f=Pattern_article_attr%3Astriped%3A%3AShoe_Type_article_attr%3Aballerina%2520%252F%2520flat%2520shoes&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463654929/radium/SIS/footwear-guide/Strappy.jpg"
								width="33.33%"
								title="t-straps flats"
							>
								<div>
									<div style={showMoreTitle}>Girl-next-door</div>
									<div style={showMoreText}>{showMoreTextObj.girlNextDoor}</div>
									<a href="http://www.myntra.com/women-flats?f=Occasion_article_attr%3Acomfortline%2Cdaily%2520%252F%2520casual%3A%3AShoe_Type_article_attr%3At-strap%2520%252F%2520thong%2520sandals%3A%3ASurface_Ornamentation_article_attr%3Abows%2Cbuckles%2Cother%2Ctassels&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>

					<div>
						<div style={linedTitle}>Kurta & leggings</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463660420/radium/SIS/footwear-guide/Model-kurta.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="kurta">
							<ImageChild
								image="http://assets.myntassets.com/v1463660450/radium/SIS/footwear-guide/kurta-Juttis.jpg"
								width="33.33%"
								title="ethnic juttis"
							>
								<div>
									<div style={showMoreTitle}>Elegant</div>
									<div style={showMoreText}>{showMoreTextObj.elegant}</div>
									<a href="http://www.myntra.com/women-Juttis?f=Occasion_article_attr%3Aethnic%2520-%2520festive&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463660450/radium/SIS/footwear-guide/kurta-OpenToe.jpg"
								width="33.33%"
								title="open-toe flats"
							>
								<div>
									<div style={showMoreTitle}>Girl-next-door</div>
									<div style={showMoreText}>{showMoreTextObj.girlNextDoor}</div>
									<a href="http://www.myntra.com/women-flats?f=Toe_Shape_article_attr%3Aopen%2520toe&sort=popularity&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463660449/radium/SIS/footwear-guide/kurta-Festive.jpg"
								width="33.33%"
								title="festive sandals"
							>
								<div>
									<div style={showMoreTitle}>Artsy</div>
									<div style={showMoreText}>{showMoreTextObj.artsy}</div>
									<a href="http://www.myntra.com/women-flats?f=Shoe_Type_article_attr%3At-strap%2520%252F%2520thong%2520sandals%3A%3ASurface_Ornamentation_article_attr%3Aethnic%2520-%2520embellished&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>






					<div>
						<div style={linedTitle}>Shorts & tank top</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463660961/radium/SIS/footwear-guide/shorts-Shorts.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="shorts">
							<ImageChild
								image="http://assets.myntassets.com/v1463660961/radium/SIS/footwear-guide/shorts-gladiators.jpg"
								width="33.33%"
								title="gladiators"
							>
								<div>
									<div style={showMoreTitle}>Trendsetter</div>
									<div style={showMoreText}>{showMoreTextObj.trendsetter}</div>
									<a href="http://www.myntra.com/women-flats?f=Shoe_Type_article_attr%3Agladiators&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463660961/radium/SIS/footwear-guide/shorts-FlipFlops.jpg"
								width="33.33%"
								title="flip-flops"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/flip-flops?f=Flip-flop_type_article_attr%3Aslip-on%2Cthong%2520strap%3A%3APattern_article_attr%3Acolour%2520block%2Cprinted%2Cstriped%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463660961/radium/SIS/footwear-guide/shorts-Sneakers.jpg"
								width="33.33%"
								title="sneakers"
							>
								<div>
									<div style={showMoreTitle}>Tomboy</div>
									<div style={showMoreText}>{showMoreTextObj.tomboy}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Shoe_Type_article_attr%3Asneakers&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>






					<div>
						<div style={linedTitle}>Shirt dress</div>
						<img style={{ width: '60%', display: 'block', margin: '0 auto' }} src="http://assets.myntassets.com/v1463661452/radium/SIS/footwear-guide/Model-shirtd.jpg" />
						<div style={linedTitle}>Pick a pair &raquo;</div>
						<ShowMore name="shirtdress">
							<ImageChild
								image="http://assets.myntassets.com/v1463661452/radium/SIS/footwear-guide/sd-Gladiators.jpg"
								width="33.33%"
								title="buckled gladiators"
							>
								<div>
									<div style={showMoreTitle}>Contemporary</div>
									<div style={showMoreText}>{showMoreTextObj.contemporary}</div>
									<a href="http://www.myntra.com/women-flats?f=Fastening_and_Back_Detail_article_attr%3Abuckle%3A%3AShoe_Type_article_attr%3Agladiators&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>

							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463661452/radium/SIS/footwear-guide/sd-Plimsoles.jpg"
								width="33.33%"
								title="printed plimsolls"
							>
								<div>
									<div style={showMoreTitle}>Relaxed</div>
									<div style={showMoreText}>{showMoreTextObj.relaxed}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Pattern_article_attr%3Aprinted%3A%3AUpper_Material_article_attr%3Acanvas%2520%252F%2520fabric&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
							<ImageChild
								image="http://assets.myntassets.com/v1463661452/radium/SIS/footwear-guide/sd-Sneakers.jpg"
								width="33.33%"
								title="white sneakers"
							>
								<div>
									<div style={showMoreTitle}>Tomboy</div>
									<div style={showMoreText}>{showMoreTextObj.tomboy}</div>
									<a href="http://www.myntra.com/women-casual-shoes?f=Pattern_article_attr%3Asolid%3A%3AShoe_Type_article_attr%3Asneakers%3A%3Acolour%3Awhite&SRC=Radium" target="_blank" style={showMoreShop}>Shop now &raquo;</a>
								</div>
								
							</ImageChild>
						</ShowMore>
					</div>


				</div>
				
			</div>

		);
	}
}