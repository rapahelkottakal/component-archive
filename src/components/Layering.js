import React from 'react';

export default class Layering extends React.Component {

	constructor() {
		super();

		this.state = {
			one: false,
			two: false,
			three: false,
		};

	}

	getLookImg() {

		let key;

		if (this.state.one && !this.state.two && !this.state.three) {
			key = '01';
		} else if (!this.state.one && this.state.two && !this.state.three) {
			key = '02';
		} else if (!this.state.one && !this.state.two && this.state.three) {
			key = '03';
		} else if (this.state.one && this.state.two && !this.state.three) {
			key = '012';
		} else if (this.state.one && !this.state.two && this.state.three) {
			key = '013';
		} else if (!this.state.one && this.state.two && this.state.three) {
			key = '023';
		} else if (this.state.one && this.state.two && this.state.three) {
			key = '0123';
		} else {
			key = '0';
		}

		return this.props.imgData.looks[key];
	}

	getSwitchStatus(key) {

		let switchStatus;

		if (this.state[key]) {
			switchStatus = '+';
		} else {
			switchStatus = '-';
		}

		return switchStatus;
	}

	handleSwitchClick(key) {

		let stateObj = this.state;

		stateObj[key] = !stateObj[key];

		this.setState(stateObj);
	}

	render() {

		let styles = {
			imgs: {
				display: 'block',
				width: '100%',
				height: 'auto'
			},

			container: {
				position: 'relative',
				margin: '16px 0'
			},

			look: {
				display: 'block',
				width: '70%'
			},

			switches: {
				position: 'absolute',
				top: 0,
				right: 0,
				width: '30%'
			},

			switch: {
				position: 'relative'
			},

			switchStatus: {
				position: 'absolute',
				top: 8,
				left: 8,
				width: 16,
				height: 16,
				lineHeight: '16px',
				textAlign: 'center',
				backgroundColor: '#000',
				color: '#fff',
				borderRadius: '50%'
			}
		}

		return(
			<div style={styles.container} className="layering-container">

				<img style={styles.look} src={this.getLookImg()} className="layering-look" />
					
				<div style={styles.switches} className="layering-switches">

					<div onClick={this.handleSwitchClick.bind(this,'one')} style={styles.switch} className="layering-switch-one">
						<img style={styles.imgs} src={this.props.imgData.switches[1]} />
						<div style={styles.switchStatus} className="layering-switch-status">{this.getSwitchStatus('one')}</div>
					</div>
					<div onClick={this.handleSwitchClick.bind(this,'two')} style={styles.switch} className="layering-switch-two">
						<img style={styles.imgs} src={this.props.imgData.switches[2]} />
						<div style={styles.switchStatus} className="layering-switch-status">{this.getSwitchStatus('two')}</div>
					</div>
					<div onClick={this.handleSwitchClick.bind(this,'three')} style={styles.switch} className="layering-switch-three">
						<img style={styles.imgs} src={this.props.imgData.switches[3]} />
						<div style={styles.switchStatus} className="layering-switch-status">{this.getSwitchStatus('three')}</div>
					</div>
				</div>
			</div>
		);
	}


	
		

}