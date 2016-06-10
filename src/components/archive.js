import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import BottomFold from './BottomFold';

export default class Archive extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			roundLeftWidthPercent: '45%',
			roundCenterWidthPercent: '40%',
			roundRightWidthPercent: '45%',
			roundLeftWidth: null,
			roundCenterWidth: null,
			roundRightWidth: null,
			roundCenterTopPadding: null
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
		}
	}

	componentDidMount() {

		const windwoWidth = window.innerWidth;
		// const containerHeight = ReactDOM.findDOMNode(this.refs.container).offsetHeight;
		const roundLeftWidth = windwoWidth * parseInt(this.state.roundLeftWidthPercent) / 100;
		// const roundLeftWidth = ReactDOM.findDOMNode(this.refs.roundLeft).offsetWidth;
		const roundCenterWidth = windwoWidth * parseInt(this.state.roundCenterWidthPercent) / 100;
		// const roundCenterWidth = ReactDOM.findDOMNode(this.refs.roundCenter).offsetWidth;
		const roundRightWidth = windwoWidth * parseInt(this.state.roundRightWidthPercent) / 100;
		// const roundRightWidth = ReactDOM.findDOMNode(this.refs.roundRight).offsetWidth;
		const roundCenterTopPadding = (roundLeftWidth - roundCenterWidth) / 2;

		console.log('percent:', parseInt(this.state.roundLeftWidthPercent));
		console.log('roundCenterWidth:', roundCenterWidth);
		console.log('window width:',window.innerWidth);

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
				width: this.state.roundLeftWidthPercent,
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
				width: this.state.roundCenterWidthPercent,
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
				width: this.state.roundLeftWidthPercent,
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
				display: 'table-cell',
				verticalAlign: 'middle',
			}
		};

		return(
			<div style={this.getContainerStyles()}>
				<div>

					<div ref="container" style={css.container}>
						<div ref="roundLeft" style={css.roundLeft}>
							<div style={css.tableWrapper}>
								<span style={css.tableCell}><span style={{fontSize: 16}}>HACK 3</span><br/>Always try on a bra under a fitted white tee. If it looks fine then, it will look fine with almost anything else.</span>
							</div>
						</div>
						<div ref="roundCenter" style={css.roundCenter}>
							<div style={css.tableWrapper}>
								<span style={css.tableCell}><span style={{fontSize: 16}}>HACK 4</span><br/>A well-fitted bra will be tight enough to let you slide two fingers comfortably under the band.</span>
							</div>
						</div>
						<div ref="roundRight" style={css.roundRight}>
							<div style={css.tableWrapper}>
								<span style={css.tableCell}><span style={{fontSize: 16}}>HACK 5</span><br/>When wearing a new bra, be sure to start with the furthest and loosest hook as the bra will loosen up and stretch over time.</span>
							</div>
						</div>
					</div>

					<BottomFold
						text="Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric."
						cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
						backgroundColor="#FFADB9"
					/>

					<BottomFold
						text="Wash your bras after every 2-3 wears and always use a gentle alcohol-free detergent that’s less harsh on the fabric."
						cornerImage="http://assets.myntassets.com/v1465468864/SIS/bra-guide/corner2.jpg"
						backgroundColor="#FFADB9"
					/>

				</div>
			</div>			
		);

	}

}