import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';
import ImageChild from './imageChild';

export default class Archive extends React.Component {

	constructor() {
		super();
		this.state = {
			size1: '',
			size2: '',
			result: ''

		}
	}
	getInputstyle(){
		return{
			width:'50%',
			float:'left',
			padding:'0 4%',
			fontFamily: 'Open Sans',
			fontSize: '13px'
		}
	}

	getShopstyle(){
		return{
			margin: '0px auto',
		    backgroundColor: 'rgb(102, 102, 102)',
		    textAlign: 'center',
		    textDecoration: 'none',
		    width: '50%',
		    padding: '6px',
		    fontSize: '14px',
		    color: '#fff'
		}
	}

	getButtonstyle(){
		return{
			backgroundColor: '#008CBA',
		    border: 'none',
		    color: 'white',
		    padding: '10px 8px',
		    textAlign: 'center',
		    textDecoration: 'none',
		    display: 'inline-block',
		    fontsize: '16px',
		    margin: '4px 36px 0 35px',
		    cursor: 'pointer'
		}
	}

	handleinput1change(e) {
		this.setState({	size1: e.target.value});
	}
	handleinput2change(e) {
		this.setState({size2: e.target.value});
	}


	reset() {
	    this.setState({
	  		size1: "",
	  		size2: "",
	  		result: ""
		});
		console.log('clicked');
	}




	handleClick(event){
		console.log('Text1 is :',this.state.size1);
		console.log('Text2 is : ',this.state.size2);

		if (this.state.size1 == 30 && this.state.size2 == 24) {
			this.setState({
				result: '30B'
			});
		}else if(this.state.size1 == 32 && this.state.size2 == 25){
			this.setState({
				result: '32B'
			});
		}else if(this.state.size1 == 34 && this.state.size2 == 27){
			this.setState({
				result: '34B'
			});
		}
		else if(this.state.size1 == 36 && this.state.size2 == 29){
			this.setState({
				result: '36B'
			});
		}else if(this.state.size1 == 38 && this.state.size2 == 31){
			this.setState({
				result: '38B'
			});
		}else if(this.state.size1 == 40 && this.state.size2 == 33){
			this.setState({
				result: '40B'
			});
		}else{
			this.setState({
				result: 'Enter Valid inputs'
			});
		}
	}

	render() {


		return(
			<div style={{ backgroundColor: '#F2F2F2', minHeight: '464px'}} >
				<ImageChild
						image="http://assets.myntassets.com/v1464934687/Lookgood/ob-size.png"
						width="50%"
					>
				</ImageChild>

				<ImageChild
						image="http://assets.myntassets.com/v1464934687/Lookgood/ub-size.png"
						width="50%"
					>
				</ImageChild>

				<p style={this.getInputstyle()}>OVERBUST (INCHES)<br/><input type="text" name="iput1" value={this.state.size1} onChange={this.handleinput1change.bind(this)} /></p>
				<p style={this.getInputstyle()}>UNDERBUST (INCHES)<br/><input type="text" name="iput2" value={this.state.size2} onChange={this.handleinput2change.bind(this)} /></p>

				<button style={this.getButtonstyle()} type="submit" onClick={this.handleClick.bind(this)}>Show the size</button>

				<button style={this.getButtonstyle()} type="reset" onClick={this.reset.bind(this)}>Reset</button>


				<p>Result: {this.state.result}</p>

				<a href="" target='_blanck'><p style={this.getShopstyle()}>SHOP NOW</p></a>

			</div>	
		);
	}
}