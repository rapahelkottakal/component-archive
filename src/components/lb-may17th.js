import React from 'react';

import {Motion, spring} from 'react-motion';


import YouTube from 'react-youtube';
// import Lightbox from 'react-native-lightbox';




export default class Pinchtozoom extends React.Component{

	// var Lightbox = require('react-native-lightbox');

	zoomImageStyles(){
		return {
			width: '100%'
		}
	}


	_onReady(event) {
	// access to player in all event handlers via event.target
	event.target.pauseVideo();
	}


	render(){
		// var pinch = require('touch-pinch');

		const opts = {
		  minHeight: '320',
		  width: '100%',
		  playerVars: { // https://developers.google.com/youtube/player_parameters
		  autoplay: 1
		  }
		};


		return(
			<div>


			<YouTube style={{width : '100%'}}
			    videoId="9mdJV5-eias"
			    opts={opts}
			    onReady={this._onReady}
			/>
				
			</div>
		);
	}
}