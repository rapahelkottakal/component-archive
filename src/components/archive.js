import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';


export default class Archive extends React.Component {

	constructor() {
		super();
		this.state = {
			value1: null,
			value2: null,
			result: null

		}
	}

	onClick(){
			this.state.value1 = document.getElementById("input1").value,
			this.state.value2 = document.getElementById("input2").value;
		console.log(this.state.value1);
		console.log(this.state.value2);
		if (this.state.value1 == 30 && this.state.value2 == 24) {
			this.result = '30B';
		}else if(this.state.value1 == 32 && this.state.value2 == 25){
			this.result = '32B';
		}else if(this.state.value1 == 34 && this.state.value2 == 27){
			this.result = '34B';
		}else if(this.state.value1 == 36 && this.state.value2 == 29){
			this.result = '36B';
		}else if(this.state.value1 == 38 && this.state.value2 == 31){
			this.result = '38B';
		}else if(this.state.value1 == 40 && this.state.value2 == 33){
			this.result = '40B';
		}
		console.log(this.result);
		// this.result = document.getElementById.innerHTML(result);
	}

	render() {

		return(
			<div>
				<p>Input 1 :<input id='input1' type="text" name="iput1" /></p>
				<p>Input 2 :<input id='input2' type="text" name="iput2" /></p>

				<button type="submit" onClick={this.onClick.bind(this)}>Show the size</button>

				<p>Result:</p> <p class="result">{this.result}</p>

			</div>	
		);
	}
}