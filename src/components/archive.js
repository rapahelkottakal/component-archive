import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import { Link, Element, Events } from 'react-scroll';

import BottomFold from './BottomFold';
import ThreeRoundDivs from './ThreeRoundDivs';

export default class Archive extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			container1: false,
			container2: false,
			container3: false,
		}
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
			textAlign: 'center',
		}
	}

	handelToggleContent(key) {
		// console.log('toggle '+key);

		if (key == 1 && !this.state.container1) {
			this.setState({
				container1: true,
				container2: false,
				container3: false
			});
		} else if(key == 1 && this.state.container1) {
			this.setState({
				container1: false,
				container2: false,
				container3: false
			});
		} else if (key == 2 && !this.state.container2) {
			this.setState({
				container1: false,
				container2: true,
				container3: false
			});
		} else if(key == 2 && this.state.container2) {
			this.setState({
				container1: false,
				container2: false,
				container3: false
			});
		} else if (key == 3 && !this.state.container3) {
			this.setState({
				container1: false,
				container2: false,
				container3: true
			});
		} else if(key == 3 && this.state.container3) {
			this.setState({
				container1: false,
				container2: false,
				container3: false
			});
		}

		// switch(key) {
		// 	case 1: this.setState({
		// 		container1: true,
		// 		container2: false,
		// 		container3: false
		// 	});
		// 	break;
		// 	case 2: this.setState({
		// 		container1: false,
		// 		container2: true,
		// 		container3: false
		// 	});
		// 	break;
		// 	case 3: this.setState({
		// 		container1: false,
		// 		container2: false,
		// 		container3: true
		// 	});
		// 	break;
		// }
		// return;
	}

	render() {

		const css = {
			topTitle: {
				fontSize: 23,
				color: '#feb0ba',
				textAlign: 'center',
				marginTop: 8,
				marginBottom: 8,
			},
			text: {
				fontSize: 11,
				lineHeight: '16px',
				margin: '8px 20px',
			},
			toggleTitle: {
				marginBottom: 3,
				display: 'block',
				color: '#fff',
				backgroundColor: '#feb0ba',
				padding: '8px 0',
				textTransform: 'uppercase'

			},
			img: {
				display: 'block',
				margin: '8px auto',
				maxWidth: '100%'
			},
			hr: {
				borderBottom: '1px solid lightgray',
				margin: '8px auto',
				width: 125
			},
			tableDark: {
				fontSize: 20,
				padding: '8px 0',
				color: '#fff',
				backgroundColor: '#feb0ba'
			},
			tableLight: {
				fontSize: 20,
				padding: '8px 0',
				color: '#fff',
				backgroundColor: '#f9cad0'
			},
			shopBtn: {
				display: 'block',
				color: '#feb0ba',
				textDecoration: 'none',
				padding: '16px 0'
			}
		}

		return(
			<div style={this.getContainerStyles()}>
				<div>

					<div style={css.topTitle}>Find the perfect bra</div>

					<img style={css.img} src="http://assets.myntassets.com/v1465821598/SIS/bra-guide/woman.jpg" />

					<div style={css.text}><em>Did you know that 80% of women wear the wrong size bra? Straps riding up the back, cups being a size too small or shoulder straps digging into the skin — these are all problems caused by not wearing the right size.</em></div>
					<div style={{marginTop: 16}}><div style={css.text}><strong>Tap to know more</strong></div></div>

					<Element name="container1"><Link to="container1" smooth={true} onClick={this.handelToggleContent.bind(this,1)} style={css.toggleTitle}>How to measure yourself</Link>
					<div style={{
						visibility: (this.state.container1) ? 'visible' : 'hidden',
						overflow: 'hidden',
						height: (this.state.container1) ? 'initial' : 0
					}}>
						<img style={css.img} src="http://assets.myntassets.com/v1465821542/SIS/bra-guide/bra-guide0.jpg" />
						
						<div style={css.hr}></div>

						<div style={css.text}>The best way is to measure your band size first, just under your breasts and around your chest with a soft tape measure.</div>

						<div style={css.text}>
							<div style={{
								color: '#feb0ba',
								display: 'inline-block',
								width: '50%',
								textAlign: 'right',
								paddingRight: 8,
								fontWeight: 'bold',
							}}>If you get an even number<br/>add 4 inches to find your band size.</div>
							<div style={{
								color: '#feb0ba',
								display: 'inline-block',
								width: '50%',
								textAlign: 'left',
								borderLeft: '1px solid #feb0ba',
								paddingLeft: 8,
								fontWeight: 'bold',
							}}>If you get an odd number<br/>add 5 inches to find your band size</div>
						</div>


						<div style={css.text}><strong>For example- If you get 31 inches, 31+5= 36 inches</strong></div>

						<img style={css.img} src="http://assets.myntassets.com/v1465816822/SIS/bra-guide/bra-guide2.jpg" />

						<div style={css.hr}></div>

						<div style={css .text}>For the cup size, you’d have to wrap the measuring tape around the fullest part of your breast, pulling it firmly, but not too tight or loose. Now subtract this measurement from your band size to get your perfect cup size.</div>
						<div style={css.text}>
							<div style={{color:'#feb0ba', fontWeight: 'bold'}}>Use the following chart to pick the right cup size:</div>
						</div>


						<div>
							<div style={css.tableDark}>0" = AA</div>
							<div style={css.tableLight}>1" = A</div>
							<div style={css.tableDark}>2" = B</div>
							<div style={css.tableLight}>3" = C</div>
							<div style={css.tableDark}>4" = D</div>
							<div style={css.tableLight}>5" = DD</div>
						</div>

						<div style={{margin: '16px 0'}}><div style={css.text}><strong>For example- If your cup size is 36 inches and band size is 34 inches- you will be a B cup with a size of 34B.</strong></div></div>
						<a style={css.shopBtn} href="http://www.myntra.com/bras?SRC=Radium" target="_blank">SHOP NOW</a>
					</div>
					</Element>

					<Element name="container2"><Link to="container1" offset={45} smooth={true} onClick={this.handelToggleContent.bind(this,2)} style={css.toggleTitle}>Useful hacks</Link>
					<div style={{
						visibility: (this.state.container2) ? 'visible' : 'hidden',
						overflow: 'hidden',
						height: (this.state.container2) ? 'initial' : 0
					}}>

						<div>
							<div style={{width: '30%', display: 'inline-block'}}>
								<img style={css.img} src="http://assets.myntassets.com/v1465813530/SIS/bra-guide/bra-guide3-min.jpg" />
							</div>
							<div style={{width: '70%', display: 'inline-block', verticalAlign: 'top', paddingTop: 20}}>
								<div style={css.text}>
									<span style={{fontSize: 16}}>HACK 1</span><br/>See if the fit is right by pulling your elbows back to ensure there is no spillage over the cups.
								</div>
							</div>
						</div>

						<div>
							<div style={{width: '70%', display: 'inline-block', verticalAlign: 'top', paddingTop: 20}}>
								<div style={css.text}>
									<span style={{fontSize: 16}}>HACK 2</span><br/>Your bra’s underwire must sit flat and not dig into your skin in any way. The centre point of your bra must lay smoothly against your chest, without gaping.
								</div>
							</div>
							<div style={{width: '30%', display: 'inline-block'}}>
								<img style={css.img} src="http://assets.myntassets.com/v1465813530/SIS/bra-guide/bra-guide4-min.jpg" />
							</div>
						</div>

						<ThreeRoundDivs
							round1Width="45%"
							title1="HACK 3"
							text1="Always try on a bra under a fitted white tee. If it looks fine then, it will look fine with almost anything else."
							round2Width="45%"
							title2="HACK 5"
							text2="When wearing a new bra, be sure to start with the furthest and loosest hook as the bra will loosen up and stretch over time."
							round3Width="45%"
							title3="HACK 4"
							text3="A well-fitted bra will be tight enough to let you slide two fingers comfortably under the band."
						/>
						<a style={css.shopBtn} href="http://www.myntra.com/bras?SRC=Radium" target="_blank">SHOP NOW</a>
					</div>
					</Element>

					<Element name="container3"><Link to="container1" offset={90} smooth={true} onClick={this.handelToggleContent.bind(this,3)} style={css.toggleTitle}>Caring for your bras</Link>
					<div style={{
						margin: '0 20px',
						visibility: (this.state.container3) ? 'visible' : 'hidden',
						overflow: 'hidden',
						height: (this.state.container3) ? 'initial' : 0
					}}>
						<img style={css.img} src="http://assets.myntassets.com/v1465813530/SIS/bra-guide/bra-guide5-min.jpg" />


						<BottomFold
							text="Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric."
							cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
							backgroundColor="#FFADB9"
						/>

						<BottomFold
							text="Always make sure to hand wash your bras as this will ensure they will last longer. If washing them in a machine, use the gentle cycle and wash them inside a garment bag."
							cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
							backgroundColor="#FFADB9"
						/>

						<BottomFold
							text="Air-dry your bras as excess heat will cause the fabric to stretch out and even tear, over a period of time."
							cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
							backgroundColor="#FFADB9"
						/>

						<BottomFold
							text="If you have bras with molded or padded cups, don’t wring them after the wash as they will lose their shape. Gently reshape the cups with your hands and lay them out flat to dry."
							cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
							backgroundColor="#FFADB9"
						/>

						<BottomFold
							text="Avoid storing all your lingerie together in one draw. Get a draw with dividers and store your bras and panties, separated by type."
							cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
							backgroundColor="#FFADB9"
						/>

						<a style={css.shopBtn} href="http://www.myntra.com/bras?SRC=Radium" target="_blank">SHOP NOW</a>

					</div>
					</Element>

				</div>
			</div>			
		);

	}

}