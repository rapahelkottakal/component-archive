Setup and run

git clone https://github.com/rapahelkottakal/component-archive.git
cd component-archive
npm install
npm start

	Title

	Props
	*text = Text to be displayed,
	font = Font family for the text. IMPORTANT: Import font in main.css. Default 'serif',
	size = Font size. Default 23,
	color = Font color. Default '#1E1E1E',
	padding = Custome padding, Default '10px 15px',
	bgColor = Set background color,
	bgImage = Set background image,

	Render children: true




	Reveal

	Props
	image = Image url,
	btnTxt = Text on the reveal button. Default 'More...',
	btnSize = Object with width and height. Default { width: 150, height: 50},
	btnColor = Text color on the button. Default 'white',
	btnBgColor = Color of the button. Default 'hsla(0, 0%, 0%, 0.8)',
	content = The know more text. Default 'Enter text',
	contentColor = Color of the reveled content, Default 'white,
	contentBgColor = Text content color. Default 'hsla(40, 100%, 15%, 0.9)',
	shopBtnText = Text on the shoping button. Default 'Shop Now',
	shopLink = link to a collection. Default 'http://myntra.com/'
	shopBtnStyle =  //add this after making Button component





	AbCenter
	Parent should have relative positioning/absolute

	Props
	padding = left and right padding. Default 15
	Render children: true



	FlipCard
	Flip to reveal and click through link

	Props
	front = image url
	back = image url
	link = shop link