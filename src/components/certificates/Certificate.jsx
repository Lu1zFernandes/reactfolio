import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/certificate.css";

const Certificate = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="certificate">
				<div className="certificate-left-side">
					<div className="certificate-date">{date}</div>
				</div>

				<Link to={link} target="_blank">
					<div className="certificate-right-side">
						<div className="certificate-title">{title}</div>
						<div className="certificate-description">
							{description}
						</div>
						<div className="certificate-link">
							Visualizar certificado
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Certificate;
