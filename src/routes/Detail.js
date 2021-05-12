import React from "react";
import "./Detail.css";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const {
			location: {
				state: { poster, title, year, genres, summary },
			},
		} = this.props;

		if (this.props.location.state) {
			return (
				<div className='movie__detail'>
					<div className='movie'>
						<img src={poster} alt={title} title={title} />
						<div className='movie__data'>
							<h3 className='movie__title'>{title}</h3>
							<h5 className='movie__year'>{year}</h5>
							<ul className='movie__genres'>
								{genres.map((genre, index) => (
									<li key={index} className='genres__genre'>
										{genre}
									</li>
								))}
							</ul>
							<p className='movie__summary'>{summary}</p>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
