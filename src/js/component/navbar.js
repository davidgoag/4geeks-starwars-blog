import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(myContext);
	const [isHovering, setisHovering] = React.useState(-1);
	const [showDropdown, setShowDropdown] = useState(false);

	let show = "";

	if (showDropdown) {
		show = "show";
	}

	return (
		<nav className="navbar sticky-top blackbackground">
			<div className="container-fluid d-flex px-5">
				<a className="navbar-brand d-flex justify-content-start" href="#">
					<Link to="/home">
						<img
							src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
							height="35rem"
							className="p-0 m-0"
						/>
					</Link>
				</a>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						onClick={() => setShowDropdown(!showDropdown)}>
						Likes
						<span className="badge mx-1">{store.favoritesList.length}</span>
					</button>
					<ul
						className={store.favoritesList.length > 0 ? "dropdown-menu " + show : "d-none"}
						aria-labelledby="dropdownMenuButton1">
						{store.favoritesList.map((favorite, index) => (
							<li
								key={index}
								onMouseEnter={() => setisHovering(index)}
								onMouseLeave={() => setisHovering(-1)}
								className="px-2 py-1">
								{favorite}
								<span
									className={`text-dark ${isHovering == index ? "" : "hidden"} ps-2`}
									onClick={() => actions.deleteFavorite(favorite)}>
									<i className="fas fa-times" />
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
