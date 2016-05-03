import React from 'react';

export default class Textonimage extends React.Component {

	// getTextStyles() {

	// 	let font = this.props.font ? this.props.font : 'serif',
	// 		size = this.props.size ? parseInt(this.props.size) : 12,
	// 		color = this.props.color ? this.props.color : '#efefef',
	// 		padding = this.props.padding ? this.props.padding : '5px 5px',
	// 		align = this.props.align ? this.props.align : 'center',
	// 		imagebk = this.props.image ? 'url(' + this.props.image + ')' : null;
	// 		positionText = this.props.positionText ? this.props.positionText : absolute;
	// 		text = this.this.props.text ? this.this.props.text : null;

	// 	return {
	// 		fontFamily: font,
	// 		fontSize: size,
	// 		color,
	// 		padding,
	// 		textAlign: align,
	// 		backgroundImage: imagebk,
	// 		position : positionText,
	// 	}
	// }
		// render() {

		// return(
		// 		<div style={this.getTextStyles()}>
		// 			{this.props.text}
		// 			{this.props.children}
		// 		</div>
		// );
	// }

	getImgStyle(){

		let widthimg = this.props.width ? this.this.props.width : '100%';
		return{
			width : widthimg,
			position : 'relative',
			display: 'block',

			}
	}


	getTextStyle(){

		let colortxt = this.props.color ? this.props.color : '#efefef',
			bgcolor = this.props.backgroundColor ? this.props.backgroundColor : 'rgba(0, 0, 0, 0.41)',
			padding = this.props.padding ? this.props.padding : '10px 10px',
			style = {
				color : colortxt,
				backgroundColor : bgcolor,
				padding : padding,
				position: 'absolute',
				fontSize : '14px',
				textAlign : 'center',
				
				// top: '35%',
	   //  		left: '35%',
			};

			switch (this.props.textPosition)
			{			   
			   case 'left' : style.top = '35%', style.right ='5%';
			   break;

			   case 'right' : style.top = '35%', style.left ='5%';
			   break;
			   
			   default: style.top = '35%', style.right ='55%';
			}
			
		return style;
// console.log(style);
	// console.log(getTextStyle);
	}


	render (){
// console.log(this);
		return (
			<div style={{position:'relative'}}>
				<div style={this.getImgStyle()}>
					<img style={{width:'100%', display: 'block'}} src={this.props.src}/>	
				</div>		
			
				<div style={this.getTextStyle()}>
					{this.props.text}
				</div>
			</div>

		);
	}

	
}