import React from "react";
import PropTypes from "prop-types";

const MusicILike = [
	{
		id: 1,
		name: "Jazz 🎷",
		image: "https://jazzongranby.com/wp-content/uploads/2020/05/1.jpg",
		rating: 5,
	},
	{
		id: 2,
		name: "Blues 🎧",
		image:
			"https://images.squarespace-cdn.com/content/v1/5e099ac5847077180a5182cd/1602641905552-E5M8E6CEU5RHBWRH9116/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Finalcover.jpg",
		rating: 4.5,
	},
	{
		id: 3,
		name: "Rock 🎸",
		image:
			"https://i.pinimg.com/736x/d5/a6/ca/d5a6ca684b0531163d5be5bdc4e142ea.jpg",
		rating: 4.4,
	},
	{
		id: 4,
		name: "Classic 🎻",
		image:
			"https://www.prague-guide.co.uk/wp-content/uploads/2015/11/czech_clasic_music.jpg",
		rating: 4,
	},
];

const Music = ({ name, image, rating }) => {
	return (
		<div>
			<h1>I like {name}</h1>
			<h4>{rating} / 5.0</h4>
			<img src={image} alt={name} />
		</div>
	);
};

Music.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};

const App = () => {
	return (
		<div>
			<h1>Hello</h1>
			{MusicILike.map((genre) => (
				<Music
					key={genre.id}
					name={genre.name}
					image={genre.image}
					rating={genre.rating}
				/>
			))}
		</div>
	);
};

export default App;
