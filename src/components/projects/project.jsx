import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
	const { logo, title, description, linkText, link, repoText, repo } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<Link to={link} target="_blank">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</Link>
					<Link to={repo} target="_blank">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div className="project-link-text">{repoText}</div>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
