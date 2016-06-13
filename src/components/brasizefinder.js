import React from 'react';
import _ from 'lodash';

export default class BraSizeFinder extends React.Component {
	constructor() {
		super();
		this.state = {
			overBustIndex: null,
			underBustIndex: null,
			braSize: null
		}
	}

	createDivList(values,type){
		var divList = values.map((value,n) => {
			// console.log(type);
			let css = {
				backgroundColor: 'tomato',
				padding: 10,
				borderRadius: '50%',
				display: 'block',
				width: '50px',
				height: '50px',
				margin: '0 auto',
				padding: '16px 17px'
			}

			if (value == this.state.overBustIndex) {
				css.backgroundColor = 'blue';
			}else if(value == this.state.underBustIndex){
				css.backgroundColor = 'blue';				
			}
			// console.log(value);

			return( <div onClick={this.handleClick.bind(this, type, n, value)} style={css} key={n}>{value} </div>);
		});
		return divList;
	}

	handleClick(type, index, clikValue){

		// console.log(type, index, clikValue);

		switch(type){
			case 'ob': this.setState({
				overBustIndex : clikValue
			});
				break;
			case 'ub': this.setState({
				underBustIndex : clikValue
			});
		}
		// console.log(overBustIndex);
	}

	braSizeCalculator(){
		// console.log(this.state.overBustIndex);
		// console.log(this.state.underBustIndex);

		


		var ubSize = this.state.underBustIndex,
			obSize = this.state.overBustIndex,
			combinations = this.props.combos,
			sizSelectObj = combinations[ubSize];

			// console.log(combinations);

		if(ubSize != null && obSize != null){
			var braSize = sizSelectObj[obSize];
			if(braSize){
				return braSize;
			}else{
				return 'Invalid Selection';
			}
		}else {
			return 'Select the inputs';

			// this.setState({
			// 	braSize: 'false'
			// });
		}

	}


	render() {

			let	outedDivCss = {
				width: '50%',
				float:'left',
				marginTop: '5%',
				textAlign: 'center'
			}
		return(
			<div>
				<div style={outedDivCss}>UNDERBUST<br/>(In inches) <br/>{this.createDivList(this.props.underBustValues,'ub')}</div>
				<div style={outedDivCss}>OVERBUST<br/>(In inches) <br/>{this.createDivList(this.props.overBustValues,'ob')}</div>				
				<div>RESULT: <br/>{this.braSizeCalculator()}</div>				

			</div>
		);
	}
}