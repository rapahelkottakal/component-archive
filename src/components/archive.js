import React from 'react';
import _ from 'lodash';
import 'normalize.css/normalize.css';
import '../css/main.css';
import YouTube from 'react-youtube';


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




		let textoption1 ={

			fontSize:'14px',
			padding:'5% 10%',
			textAlign:'center',
			color:'#58574F'
		}

		const css = {
			img: {
				width: '100%',
				height: 'auto'
			},
			hr:{

				width:'35%',
				textAlign:'center',
				color:'#58574F',
			},
			a: {
			textAlign:'center',
			backgroundColor: 'rgb(251, 132, 1)', 
			textDecoration:'none',
			padding: '2px 5px', 
			letterSpacing: '3px', 
			textTransform:'uppercase', 
			fontSize:'14px', 
			color:'#000', 
			width: '175px',
    		margin: '0 auto 16px'
			}
		};

		const videoOptions = {
			width:'100%',
			height:'auto',
			playerVars: {
				controls: 0,
				showinfo: 0,
				color: 'white',
	            // color: 'black'
	        },


		}


		return(
			<div style={this.getContainerStyles()}>

				<div>
					<img style={css.img} src="http://assets.myntassets.com/v1466594532/reactive/gerua-20-6-16/gerua-banner_1.jpg" />

				</div>

				<div style={{display:'flex', marginTop:'-5px'}}>
					<div style={{width:'50%'}}>
						<a href={'http://www.myntra.com/u/Gerua.women?SRC=Radium'} target="_blank">
							<img style={css.img} src="http://assets.myntassets.com/v1466594560/reactive/gerua-20-6-16/follow-brand-gerua.jpg" />
						</a>
					</div>	
					<div style={{width:'50%'}}>
						<a href={'http://www.myntra.com/gerua'} target="_blank">
							<img style={css.img} src="http://assets.myntassets.com/v1466594558/reactive/gerua-20-6-16/shop-brand--gerua.jpg" />
						</a>
					</div>	
				</div>

				<div>
					<img style={{width: '100%',	height: 'auto' ,marginTop: '7%'}} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_03-min.jpg" />
					<img style={css.img} src="http://assets.myntassets.com/v1466513815/reactive/gerua-20-6-16/gerua_05.jpg" />
					<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_06-min.jpg" />

				</div>

				<div className='textoption1'>Beautiful georgette, cotton or cotton jacquard pieces in sunset hues will infuse your wardrobe with a youthful vibe.</div>
					<div style={css.a}>
					 	<a href={'http://www.myntra.com/gerua-hos?SRC=Radium'} target="_blank">shop collection</a>
					</div>
				<hr style={css.hr} />

				<div>
					<img style={css.img} src="http://assets.myntassets.com/v1466513814/reactive/gerua-20-6-16/gerua_08.jpg" />
					<img style={css.img} src="http://assets.myntassets.com/v1466424768/reactive/gerua-20-6-16/Gerua_09-min.jpg" />

				</div>
				
				<div className='textoption1'>Trendy silhouettes and techniques like colourblocking and slits have created a jaw-dropping modern collection in materials like cotton, crepe and georgette. </div>
					<div style={css.a}>
						<a href={'http://www.myntra.com/gerua-sms?SRC=Radium'} target="_blank" style={css.atag}>shop collection</a>
					</div>					
				<hr style={css.hr} />

				<div>
					<img style={css.img} src="http://assets.myntassets.com/v1466513814/reactive/gerua-20-6-16/gerua_11.jpg" />
					<img style={css.img} src="http://assets.myntassets.com/v1466424769/reactive/gerua-20-6-16/Gerua_12-min.jpg" />

				</div>
				
				<div className='textoption1'style={{padding:'2% 10% 5% 10%'}}>The bold hued simple kurtas in cotton and cotton jacquard can be paired in many ways to create dazzling outfits.</div>
					<div style={css.a}>
						<a href={'	http://www.myntra.com/gerua-sb?SRC=Radium'} target="_blank" style={css.atag}>shop collection</a>
					</div>
				<hr style={css.hr} />

				<div className='textoption1' style={{color:'#A7A492'}}>Can’t wait to get your hands on a Gerua? Get this look soon exclusively on Myntra.</div>
				
				<YouTube
				videoId="rZKo08a2ER8"
				opts={videoOptions}
				/>
					
			</div>
		);

	}
}