import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/certificate.css";

const Certificate = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-certificate">
				<div className="homepage-certificate-content">
					<div className="homepage-certificate-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-certificate-title">{title}</div>
					<div className="homepage-certificate-description">
						{description}
					</div>
					<div className="homepage-certificate-link">
						<Link to={link} target="_blank">
							Visualizar certificado
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificate;
