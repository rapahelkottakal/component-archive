import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import BraSizeFinder from './brasizefinder'

export default class Archive extends React.Component {

	

	render() {
		const result = 'text';
		const underBustValues = [26, 28, 30];
		const overBustValues = [ 32, 33, 34, 35, 36, 37, 38];
		let combos = {
			26:{
				32: '30B',
				33: '30C',
				34: '30D'
			},
			28:{
				34: '32B',
				35: '32C',
				36: '32D'
			},
			30:{
				36: '34B',
				37: '34C',
				38: '34D'
			}			
		};


		return(
			<div>

				<BraSizeFinder combos={combos} overBustValues={overBustValues} underBustValues={underBustValues} />

			</div>	
		);

	}
}
