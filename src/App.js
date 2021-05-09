import React from "react";

const Food = ({ fav }) => {
	return <h1>I like {fav}</h1>;
};

const App = () => {
	return (
		<div>
			<h1>Hello</h1>
			<Food fav='Jazz 🎷' />
			<Food fav='Blues 🎧' />
			<Food fav='Rock 🎸' />
			<Food fav='Classic 🎻' />
		</div>
	);
};

export default App;
