import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const CharacterCard = props => {
	const { store, actions } = useContext(myContext);

	return (
		<div
			className="card starwarscard darkcard p-0 me-3 mb-4"
			style={{ minWidth: "20rem", maxWidth: "20rem", minHeight: "23rem" }}>
			<img
				src="https://media.contentapi.ea.com/content/dam/ea/walrus/characters/yoda/hero-images/yoda-hero-xlg.jpg.adapt.crop191x100.1200w.jpg"
				className="card-img-top"
				alt="Star Wars"
			/>
			<div className="card-body p-3">
				<h5 className="card-title">{props.card_character.name}</h5>
				<p className="card-text">Gender: {props.card_character.gender}</p>
				<p className="card-text">Hair color: {props.card_character.hair_color}</p>
				<p className="card-text">Eye color: {props.card_character.eye_color}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detailscharacters/${props.index + 1}`}>
						<button href="#" className="btn btn-primary">
							Details
						</button>
					</Link>
					<button
						href="#"
						className="btn iconbutton"
						onClick={() => actions.addFavorites(props.card_character.name)}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	card_character: PropType.object,
	index: PropType.number
};
