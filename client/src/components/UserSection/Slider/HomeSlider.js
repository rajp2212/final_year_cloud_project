import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import {Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: 'Service filtering',
		path:"filter",
		button: 'Discover',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: '',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Resource controller',
		path:"myresources",
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: '',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Search for service providers',
		path:"filter",
		button: 'Search',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: '',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Rankings',
		path:"filter",
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: '',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	
];
const clickevent=()=>{
	console.log('Here clicked');
	
}
const HomeSlider = () => (


	<div>
{/* <Button component={Link} to="/userHome/search"  role="button">search</Button> */}

{/* <Slider classNames={horizontalCss}>
{content.map((item, index) => (
	<div
		key={index}
		
		style={{ background: `url('${item.image}') no-repeat center center` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider> */}



		<Slider className="slider-wrapper" autoplay={1500} >
		
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						{/* <p>{item.description}</p> */}
						
						<Button component={Link} to={`/userHome/${item.path}`} className='button-30' variant='contained' role="button">{item.button}</Button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Provided by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
);

export default HomeSlider;