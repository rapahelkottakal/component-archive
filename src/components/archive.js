import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Layering from './Layering';


export default class Archive extends React.Component {

	constructor() {
		super();

		this.state = {
			windowHeight: window.innerHeight
		};

	}	

	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize.bind(this));
	}

	handleResize(e) {
		this.setState({
			windowHeight: window.innerHeight
		});
	}

	getContainerStyles() {
		return {
			minHeight: this.state.windowHeight,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	render() {

		let anarkali = {
			looks: {
				'0': 'http://assets.myntassets.com/v1444714045/Lookgood/october/13th/Ethniclayering/AnarkaliSuit_basic.jpg',
				'01': 'http://assets.myntassets.com/v1444716699/Lookgood/october/13th/Ethniclayering/Ethniclayering_jacket.jpg',
				'02': 'http://assets.myntassets.com/v1444716703/Lookgood/october/13th/Ethniclayering/AnarkaliSuit_necklace.jpg',
				'03': 'http://assets.myntassets.com/v1444716699/Lookgood/october/13th/Ethniclayering/Ethniclayering_dupatta.jpg',
				'012': 'http://assets.myntassets.com/v1444806913/Lookgood/october/13th/Ethniclayering/AnarkaliSuit_necklaceJacket.jpg',
				'013': 'http://assets.myntassets.com/v1445004031/Lookgood/october/13th/Ethniclayering/Ethniclayering_jacketDupatta.jpg',
				'023': 'http://assets.myntassets.com/v1445004091/Lookgood/october/13th/Ethniclayering/Ethniclayering_dupattaNecklace.jpg',
				'0123': 'http://assets.myntassets.com/v1444806910/Lookgood/october/13th/Ethniclayering/AnarkaliSuit_necklaceJacketDupatta.jpg'
			},
			switches: {
				1: 'http://assets.myntassets.com/v1444714059/Lookgood/october/13th/Ethniclayering/jacketplus.jpg',
				2: 'http://assets.myntassets.com/v1444714059/Lookgood/october/13th/Ethniclayering/necklaceplus.jpg',
				3: 'http://assets.myntassets.com/v1444714058/Lookgood/october/13th/Ethniclayering/dupattaplus.jpg'
			}
		},
			ethnicSkirt = {
			looks: {
				'0': 'http://assets.myntassets.com/v1444983202/Lookgood/october/13th/Ethniclayering/ethnicskirts/EthnicSkirts_basic.jpg',
				'01': 'http://assets.myntassets.com/v1444983201/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_jacket.jpg',
				'02': 'http://assets.myntassets.com/v1444983199/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_necklace.jpg',
				'03': 'http://assets.myntassets.com/v1444983201/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_dupatta.jpg',
				'012': 'http://assets.myntassets.com/v1444983205/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_necklaceJacket.jpg',
				'013': 'http://assets.myntassets.com/v1444983212/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_jacketdupatta.jpg',
				'023': 'http://assets.myntassets.com/v1444983200/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_dupattanecklace.jpg',
				'0123': 'http://assets.myntassets.com/v1444983204/Lookgood/october/13th/Ethniclayering/ethnicskirts/Ethniclayering_necklaceJacketDupatta.jpg'
			},
			switches: {
				1: 'http://assets.myntassets.com/v1444983206/Lookgood/october/13th/Ethniclayering/ethnicskirts/jacketplus.jpg',
				2: 'http://assets.myntassets.com/v1444983203/Lookgood/october/13th/Ethniclayering/ethnicskirts/necklaceplus.jpg',
				3: 'http://assets.myntassets.com/v1444983201/Lookgood/october/13th/Ethniclayering/ethnicskirts/dupattaplus.jpg'
			}
		},	longKurtas = {
			looks: {
				'0': 'http://assets.myntassets.com/v1445004397/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis-Basic.jpg',
				'01': 'http://assets.myntassets.com/v1445004395/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_jacket.jpg',
				'02': 'http://assets.myntassets.com/v1445004396/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_necklace.jpg',
				'03': 'http://assets.myntassets.com/v1445004397/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_belt.jpg',
				'012': 'http://assets.myntassets.com/v1445004395/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_necklacejacket.jpg',
				'013': 'http://assets.myntassets.com/v1445004396/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_jacketbelt.jpg',
				'023': 'http://assets.myntassets.com/v1445004396/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_necklacebelt.jpg',
				'0123': 'http://assets.myntassets.com/v1445004396/Lookgood/october/13th/Ethniclayering/LongKurtis/LongKurtis_necklacejacketbelt.jpg'
			},
			switches: {
				1: 'http://assets.myntassets.com/v1445004396/Lookgood/october/13th/Ethniclayering/LongKurtis/jacketplus.jpg',
				2: 'http://assets.myntassets.com/v1445004397/Lookgood/october/13th/Ethniclayering/LongKurtis/necklaceplus.jpg',
				3: 'http://assets.myntassets.com/v1445004395/Lookgood/october/13th/Ethniclayering/LongKurtis/beltplus.jpg'
			}
		};

		return(
			<div style={this.getContainerStyles()}>

				<div>
					<Layering imgData={anarkali} />
					<Layering imgData={ethnicSkirt} />
					<Layering imgData={longKurtas} />
				</div>
				
			</div>

		);
	}


	
		

}