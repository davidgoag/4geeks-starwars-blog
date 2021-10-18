import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(myContext);

	return (
		<div
			className="card starwarscard darkcard p-0 me-3 mb-4"
			style={{ minWidth: "20rem", maxWidth: "20rem", minHeight: "23rem" }}>
			<img
				src="https://cdn.mos.cms.futurecdn.net/qLEUrao7WGAPGfWzkN2QZS.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title">{props.card_planet.name}</h5>
				<p className="card-text">Population: {props.card_planet.population}</p>
				<p className="card-text">Terrain: {props.card_planet.terrain}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detailsplanets/${props.index + 1}`}>
						<button href="#" className="btn btn-primary">
							Planet details
						</button>
					</Link>
					<button
						href="#"
						className="btn iconbutton"
						onClick={() => actions.addFavorites(props.card_planet.name)}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	card_planet: PropType.object,
	index: PropType.number
};
