import React from 'react';


import 'normalize.css/normalize.css';
import '../css/main.css';



import YouTube from 'react-youtube';
import Title from './title';

import Ga from '../helpers/Ga';


export default class Archive extends React.Component {

	constructor() {
		super();
		this.videoFirstPlay = false;
	}

	handelShopBtnClick(e) {
		Ga({
			action: e.target.closest('a').title,
			label: e.target.closest('a').href
		 });
	}

	handelVideoPlay(e) {
		// console.log(this.videoFirstPlay);

		if (!this.videoFirstPlay) {
			Ga({
				action: 'Video',
				label: 'Played'
			});
			this.videoFirstPlay = true;
		}

	}

	handelVideoEnd(e) {
		Ga({
			action: 'Video',
			label: 'Completed'
		});
		this.videoFirstPlay = false;
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


	// getTextPositionStyles() {
	// 	return {

	// 		position: 'absolute',
	// 		top: 10,
	// 		left: 50,
	// 		width: '100%',
	// 	}
	// }

	// _onReady(event) {
	// 	console.log(event);
	// 	// access to player in all event handlers via event.target 
	// 	// event.target.pauseVideo();
	// }


	render() {

		// console.log('test', sliderGroupData);


		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};

		let linkStyle = {
			display: 'inline-block',
			backgroundColor: 'tomato',
			width: 100,
			height: 50
		};

		const videoHeight = window.innerWidth * 9 / 16;

		const opts = {
	      height: videoHeight,
	      width: '100%',
	      playerVars: { // https://developers.google.com/youtube/player_parameters 
	        // autoplay: 1,
	        disablekb: 0,
	        controls: 0,
	        enablejsapi: 1,
	        iv_load_policy: 3,
	        modestbranding: 1,
	        playsinline: 0,
	        rel: 0,
	        showinfo: 0,
	        color:'white'
	      }
	    };

		return(
			<div style={this.getContainerStyles()}>

			<img style={{display: 'block'}} src="http://assets.myntassets.com/v1464329768/SIS/quiz-post/QUIZ-quiz-logo.jpg" width="100%" height="auto" />
			<Title 
				text="It’s a U.K. based fashion brand that specialises in women’s western wear, footwear and accessories. They offer the freshest trends to the urban woman who isn’t shy to try something new. "
				font= "Open Sans"
				color="#585858"
				size="14"
				padding="4% 7% 3%"
				align="center"
			/>
			<a onClick={this.handelShopBtnClick} title="Shop collection btn - first" href="http://www.myntra.com/quiz?SRC=Radium" target="_blanck">
				<img style={{display: 'block', margin: '10% 0'}} src="http://assets.myntassets.com/v1464333180/SIS/quiz-post/QUIZ-explore.jpg" width="100%" height="auto" />
			</a>
			<img style={{display: 'block'}} src="http://assets.myntassets.com/v1464329854/SIS/quiz-post/QUIZ-clothing.jpg" width="100%" height="auto" />

			<img style={{display: 'block'}} src="http://assets.myntassets.com/v1464329855/SIS/quiz-post/QUIZ-footwear.jpg" width="100%" height="auto" />

			<img style={{display: 'block'}} src="http://assets.myntassets.com/v1464330045/SIS/quiz-post/QUIZ-handbags.jpg" width="100%" height="auto" />

			<img style={{display: 'block', marginBottom: '6%'}} src="http://assets.myntassets.com/v1464330045/SIS/quiz-post/QUIZ-accessories.jpg" width="100%" height="auto" />

			<YouTube
		        videoId="nzIw2R272jo"
		        opts={opts}
		        onPlay={this.handelVideoPlay.bind(this)}
		        onEnd={this.handelVideoEnd.bind(this)}
		      />

			<img style={{display: 'block', marginTop: '10%'}} src="http://assets.myntassets.com/v1464331904/SIS/quiz-post/QUIZ-nautical.jpg" width="100%" height="auto" />

			<img style={{display: 'block', marginTop: '10%'}} src="http://assets.myntassets.com/v1464331903/SIS/quiz-post/QUIZ-cocktail.jpg" width="100%" height="auto" />

			<img style={{display: 'block', marginTop: '10%'}} src="http://assets.myntassets.com/v1464333054/SIS/quiz-post/QUIZ-prints.jpg" width="100%" height="auto" />

			<img style={{display: 'block', marginTop: '10%'}} src="http://assets.myntassets.com/v1464333053/SIS/quiz-post/QUIZ-black-and-white.jpg" width="100%" height="auto" />

			<a onClick={this.handelShopBtnClick} title="Shop collection btn - last" href="http://www.myntra.com/quiz?SRC=Radium" target="_blanck">
				<img style={{display: 'block', margin: '10% 0'}} src="http://assets.myntassets.com/v1464333180/SIS/quiz-post/QUIZ-explore.jpg" width="100%" height="auto" />
			</a>
			</div>
		);
	}
}