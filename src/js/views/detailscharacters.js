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
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F04%2FStar-Wars-The-Force-Awakens.jpg&f=1&nofb=1"
						className="img-fluid"
						height="60%"
						alt="..."
					/>
				</div>
				<div className="col">
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
				<div className="col">
					<h4>Name</h4>
					<h5>{item.name}</h5>
				</div>
				<div className="col">
					<h4>Birth Year</h4>
					<h5>{item.birth_year}</h5>
				</div>
				<div className="col">
					<h4>Gender</h4>
					<h5>{item.gender}</h5>
				</div>
				<div className="col">
					<h4>Height</h4>
					<h5>{item.height}</h5>
				</div>
				<div className="col">
					<h4>Skin Color</h4>
					<h5>{item.skin_color}</h5>
				</div>
				<div className="col">
					<h4>Eye Color</h4>
					<h5>{item.eye_color}</h5>
				</div>
			</div>
			<Link to="/home">
				<h5>Back to home</h5>
			</Link>
		</div>
	);
};

DetailsCharacters.propTypes = {
	match: PropType.object
};
