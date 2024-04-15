import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Trabalhando"
				body={
					<div className="works-body">
						<a
							href="https://www.udemy.com/share/104rzS3@YFTg7AZem7x3AMUpoMmfBzxxGCS62piFky1neYWyf0mGHHJj6fvaztCwqY1jOgbmGw==/"
							target="_blank"
							rel="noreferrer"
							className="work-link"
						>
							<div className="work">
								<img
									src="./react.png"
									alt="react"
									className="work-image"
								/>
								<div className="works-description">
									<div className="work-title">
										React JS com TypeScript Direto ao Ponto
										c/ projetos
									</div>
									<div className="work-subtitle">
										Melhorando minhas habilidades com React
									</div>
								</div>
							</div>
						</a>

						<a
							href="https://www.udemy.com/share/10a0US3@dEbWclz5qD61dO2EyTQfrmUmsWO4EF14MeAoFk_uNUkrqfdaor6qDljHJKzva6tzrQ==/"
							target="_blank"
							rel="noreferrer"
							className="work-link"
						>
							<div className="work">
								<img
									src="./sql.png"
									alt="sql"
									className="work-image"
								/>
								<div className="works-description">
									<div className="work-title">
										SQL do básico ao avançado com MySQL e
										Projeto
									</div>
									<div className="work-subtitle">
										Melhorando meu back-end
									</div>
								</div>
							</div>
						</a>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
