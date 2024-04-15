import React from "react";

import Project from "./project";

import "./styles/allProjects.css";
import latestProjects from "../../data/lastsProjects";

const ProjectsHome = () => {
	return (
		<div className="all-projects-container">
			{latestProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						repoText={project.repoText}
						repo={project.repo}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectsHome;
