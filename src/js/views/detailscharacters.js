import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";

export const DetailsCharacters = props => {
	const [item, setItem] = useState({});

	useEffect(() => {
		fetch(`https://swapi.dev/api/people/${props.match.params.id}`)
			.then(res => res.json())
			.then(data => setItem(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid p-4 m-0">
			<div className="row mb-3">
				<div className="col">
					<img
						src="https://cdn.shopify.com/s/files/1/1057/4964/products/star-wars-vintage-movie-poster-original-british-quad-30x40-6154.jpg"
						className="img-fluid"
						height="60%"
						alt="..."
					/>
				</div>
				<div className="col transparentbox p-5">
					<h1>{item.name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
			<div className="row mb-3">
				<hr />
				<div className="col transparentbox2">
					<h4>Name</h4>
					<h5>{item.name}</h5>
				</div>
				<div className="col transparentbox2">
					<h4>Birth Year</h4>
					<h5>{item.birth_year}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Gender</h4>
					<h5>{item.gender}</h5>
				</div>
				<div className="col transparentbox2">
					<h4>Height</h4>
					<h5>{item.height}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Skin Color</h4>
					<h5>{item.skin_color}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Eye Color</h4>
					<h5>{item.eye_color}</h5>
				</div>
			</div>
			<Link to="/home">
				<button className="btn btn-primary mt-5">Home page</button>
			</Link>
		</div>
	);
};

DetailsCharacters.propTypes = {
	match: PropType.object
};
