import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer id="sticky-footer" className="flex-shrink-0 py-4 blackbackground text-white-50">
		<div className="container text-center">
			<Link to="/home">
				<img
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
					height="35rem"
					className="p-0 m-0"
				/>
			</Link>
		</div>
	</footer>
);
