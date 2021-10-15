import React, { useState, useEffect, useContext } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isHovering, setisHovering] = React.useState(-1);

	return (
		<nav className="navbar navbar-light bg-secondary bg-opacity-25">
			<div className="container-fluid d-flex px-5">
				<a className="navbar-brand d-flex justify-content-start" href="#">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FStar_Wars_logo_logotype.png&f=1&nofb=1"
						height="35rem"
						className="p-0 m-0"
					/>
				</a>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favorites
						<Badge bg="success">{store.favoritesList.length}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<ul>
							{store.favoritesList.map((favorite, index) => (
								<li
									key={index}
									onMouseEnter={() => setisHovering(index)}
									onMouseLeave={() => setisHovering(-1)}>
									{favorite}
									<span
										className={`text-dark ${isHovering == index ? "" : "hidden"} px-2`}
										onClick={() => actions.deleteFavorite(favorite)}>
										<i className="fas fa-trash-alt" />
									</span>
								</li>
							))}
						</ul>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
