import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animation.css';
import './styles.css';

import horizontalCss from 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: 'Providing Users with their desired cloud services',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Passion',
	},
	{
		title: 'Resource controlling at your tips',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Perseverance',
	},
	{
		title: 'Best service providers and innovations',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Honesty',
	},
	{
		title: 'Trustworthy facilities across the web',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Azure',
	},
	
];

const MainSlider = () => (


	<div>
	<Slider className="slider-wrapper" autoplay={1500} >
		    
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
                        
						<h2>{item.title}</h2>
						
						
					</div>
					<section>
						<span>
							Provided by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
);

export default MainSlider;