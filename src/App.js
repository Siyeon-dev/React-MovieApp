import React from "react";

const MusicILike = [
	{
		id: 1,
		name: "Jazz 🎷",
		image: "https://jazzongranby.com/wp-content/uploads/2020/05/1.jpg",
	},
	{
		id: 2,
		name: "Blues 🎧",
		image:
			"https://images.squarespace-cdn.com/content/v1/5e099ac5847077180a5182cd/1602641905552-E5M8E6CEU5RHBWRH9116/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Finalcover.jpg",
	},
	{
		id: 3,
		name: "Rock 🎸",
		image:
			"https://i.pinimg.com/736x/d5/a6/ca/d5a6ca684b0531163d5be5bdc4e142ea.jpg",
	},
	{
		id: 4,
		name: "Classic 🎻",
		image:
			"https://www.prague-guide.co.uk/wp-content/uploads/2015/11/czech_clasic_music.jpg",
	},
];

const Music = ({ fav, img }) => {
	return (
		<div>
			<h1>I like {fav}</h1>
			<img src={img} alt={fav} />
		</div>
	);
};

const App = () => {
	return (
		<div>
			<h1>Hello</h1>
			{MusicILike.map((genre) => (
				<Music key={genre.id} fav={genre.name} img={genre.image} />
			))}
		</div>
	);
};

export default App;
