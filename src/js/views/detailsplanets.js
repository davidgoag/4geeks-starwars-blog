import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";

export const DetailsPlanets = props => {
	const [item, setItem] = useState({});

	useEffect(() => {
		fetch(`https://swapi.dev/api/planets/${props.match.params.id}`)
			.then(res => res.json())
			.then(data => setItem(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid p-4 m-0 pt-5 fullheight">
			<div className="row mb-3">
				<div className="col">
					<img
						src="https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5f54300f78b2fc001c3004d0.jpg"
						className="img-fluid"
						height="80%"
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
				<div className="col transparentbox2 capson">
					<h4>Name</h4>
					<h5>{item.name}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Climate</h4>
					<h5>{item.climate}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Population</h4>
					<h5>{item.population}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Orbital Period</h4>
					<h5>{item.orbital_period}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Rotation Period</h4>
					<h5>{item.rotation_period}</h5>
				</div>
				<div className="col transparentbox2 capson">
					<h4>Diameter</h4>
					<h5>{item.diameter}</h5>
				</div>
			</div>
			<Link to="/home">
				<button className="btn btn-primary mt-5">Home page</button>
			</Link>
		</div>
	);
};

DetailsPlanets.propTypes = {
	match: PropType.object
};
