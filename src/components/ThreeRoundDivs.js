import React from 'react';

export default class ThreeRoundDivs extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			// roundLeftWidthPercent: '45%',
			// roundCenterWidthPercent: '45%',
			// roundRightWidthPercent: '45%',
			roundLeftWidth: null,
			roundCenterWidth: null,
			roundRightWidth: null,
			roundCenterTopPadding: null
		}
	}

	componentDidMount() {

		const windwoWidth = window.innerWidth;
		// const containerHeight = ReactDOM.findDOMNode(this.refs.container).offsetHeight;
		const roundLeftWidth = windwoWidth * parseInt(this.props.round1Width) / 100;
		// const roundLeftWidth = ReactDOM.findDOMNode(this.refs.roundLeft).offsetWidth;
		const roundCenterWidth = windwoWidth * parseInt(this.props.round2Width) / 100;
		// const roundCenterWidth = ReactDOM.findDOMNode(this.refs.roundCenter).offsetWidth;
		const roundRightWidth = windwoWidth * parseInt(this.props.round3Width) / 100;
		// const roundRightWidth = ReactDOM.findDOMNode(this.refs.roundRight).offsetWidth;
		const roundCenterTopPadding = (roundLeftWidth - roundCenterWidth) / 2;

		// console.log('percent:', parseInt(this.state.roundLeftWidthPercent));
		// console.log('roundCenterWidth:', roundCenterWidth);
		// console.log('window width:',window.innerWidth);

		this.setState({
			roundLeftWidth,
			roundCenterWidth,
			roundRightWidth,
			roundCenterTopPadding
		});
	}

	render() {

		const css = {
			container: {
				marginTop: 16,
				marginBottom: 16,
				position: 'relative',
				fontSize: 10,
				textAlign: 'center',
				width: '100%',
				height: this.state.roundLeftWidth + this.state.roundCenterWidth - this.state.roundLeftWidth * 0.1,
				overflow: 'hidden'
			},
			roundLeft: {
				position: 'absolute',
				top: 0,
				left: 0,
				marginLeft: 8,
				padding: '10px 17px',
				width: this.props.round1Width,
				height: this.state.roundLeftWidth,
				backgroundColor: '#fff',
				border: '1px dashed #FEB0BA',
				zIndex: 10,
				overflow: 'hidden',
				borderRadius: '50%',
			},
			roundCenter: {
				padding: '10px 17px',
				position: 'absolute',
				top: this.state.roundLeftWidth - this.state.roundLeftWidth * 0.1,
				left: '50%',
				marginLeft: -this.state.roundCenterWidth / 2,
				width: this.props.round2Width,
				height: this.state.roundCenterWidth,
				backgroundColor:'#FEB0BA',
				zIndex: 30,
				overflow: 'hidden',
				borderRadius: '50%',
			},
			roundRight: {
				marginRight: 8,
				padding: '10px 17px',
				position: 'absolute',
				width: this.props.round3Width,
				height: this.state.roundRightWidth,
				top: 0,
				right: 0,
				backgroundColor: '#fff',
				border: '1px dashed #FEB0BA',
				zIndex: 20,
				overflow: 'hidden',
				borderRadius: '50%',
			},
			tableWrapper: {
				display: 'table',
				height: '100%'
			},
			tableCell: {
				lineHeight: '13px',
				display: 'table-cell',
				verticalAlign: 'middle',
			}
		};

		return(

			<div ref="container" style={css.container}>
				<div ref="roundLeft" style={css.roundLeft}>
					<div style={css.tableWrapper}>
						<span style={css.tableCell}><span style={{fontSize: 16}}>{this.props.title1}</span><br/>{this.props.text1}</span>
					</div>
				</div>
				<div ref="roundCenter" style={css.roundCenter}>
					<div style={css.tableWrapper}>
						<span style={css.tableCell}><span style={{fontSize: 16}}>{this.props.title2}</span><br/>{this.props.text2}</span>
					</div>
				</div>
				<div ref="roundRight" style={css.roundRight}>
					<div style={css.tableWrapper}>
						<span style={css.tableCell}><span style={{fontSize: 16}}>{this.props.title3}</span><br/>{this.props.text3}</span>
					</div>
				</div>
			</div>
		);
	}
}