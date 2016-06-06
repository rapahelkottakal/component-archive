import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';
import ImageChild from './imageChild';
import classnames from 'classnames';

export default class Archive extends React.Component {

	constructor() {
		super();
		this.state = {
			size1: 'nosize',
			size2: 'nosize',
			result: '',
			active: false,
			active1: false

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

	getSizestyle(){
		return{
			width:'50%',
			float:'left',
			textAlign: 'center',
			backgroundColor:'rgb(209, 173, 247)',
			paddingBottom: '25px'
		}
	}

	getNumberstyle(){
		return{
			border: '1px solid rgb(102, 102, 102)',
    		borderRadius: '50%',
		    width: '50px',
		    height: '50px',
		    padding: '16px',
		    margin: '0 auto',
		    marginTop: '3px',
		    color: '#F70000'
		}
	}

	getInputValue1(e){
		// console.log('The value1 is ',e.target.data-id);
		this.setState({	size1: e.target.value , active: true});		
	}
	getInputValue2(e){
		this.setState({	size2: e.target.value, active1: true});
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


	reset() {
	    this.setState({
	  		size1: "nosize",
	  		size2: "nosize",
	  		result: "",
	  		active: false,
	  		active1: false
		});
		console.log('clicked');
	}

	caluculate() {
		// console.log('Inside caluculate');
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
		var self = this;

		if (this.state.size1 == 'nosize' && this.state.size2 == 'nosize'){
			console.log('Insideeee is null')
		} else {
			// this.handleClick().bind(this);
			// self.caluculate();
			// console.log('Inside is not null');
		}
		let clas = [];
		clas.push('specialbutton');
		if(this.state.active){
			clas.push(' active')
		}

		console.log('the class',clas)

		let classes = classnames('specialbutton', {active: this.state.active});
		let classes1 = classnames('specialbutton1', {active1: this.state.active1});


		return(
			<div style={{ backgroundColor: 'rgb(209, 173, 247)', minHeight: '600px'}} >

				<div class="ob-sizes" style={this.getSizestyle()}>
					<p>OVERBUST (INCHES)<br/></p>
					<p className={clas} style={this.getNumberstyle()} value="30" onClick={this.getInputValue1.bind(this)}>30</p>
					<p className={clas} style={this.getNumberstyle()} value="32" data-id="1" onClick={this.getInputValue1.bind(this)}>32</p>
					<p style={this.getNumberstyle()} value="34" onClick={this.getInputValue1.bind(this)}>34</p>
					<p style={this.getNumberstyle()} value="36" onClick={this.getInputValue1.bind(this)}>36</p>
					<p style={this.getNumberstyle()} value="38" onClick={this.getInputValue1.bind(this)}>38</p>
				</div>

				<div class="ub-sizes" style={this.getSizestyle()}>
					<p>UNDERBUST (INCHES)<br/></p>
					<p  className={clas} style={this.getNumberstyle()} value="24" onClick={this.getInputValue2.bind(this)}>24</p>
					<p  className={clas}  style={this.getNumberstyle()} value="25" onClick={this.getInputValue2.bind(this)}>25</p>
					<p style={this.getNumberstyle()} value="27" onClick={this.getInputValue2.bind(this)}>27</p>
					<p style={this.getNumberstyle()} value="29" onClick={this.getInputValue2.bind(this)}>29</p>
					<p style={this.getNumberstyle()} value="31" onClick={this.getInputValue2.bind(this)}>31</p>
				</div>

				<button style={this.getButtonstyle()} type="submit" onClick={this.handleClick.bind(this)}>Show the size</button>
				<button style={this.getButtonstyle()} type="reset" onClick={this.reset.bind(this)}>Reset</button>


				<p>Result: {this.state.result}</p>






			</div>	
		);
	}
}