import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificate from "../components/certificates/Certificate";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certificates.css";
import allCertificates from "../data/certificates";

const Certificates = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "Certificados");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certificados | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="language" content={currentSEO.language} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certificates" />
				<div className="content-wrapper">
					<div className="certificates-logo-container">
						<div className="certificates-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="certificates-main-container">
						<div className="title certificates-title">
							{INFO.certificates.title}
						</div>

						<div className="subtitle certificates-subtitle">
							{INFO.certificates.description}
						</div>

						<div className="certificates-container">
							<div className="certificates-wrapper">
								{allCertificates.map((certificate) => (
									<div
										className="certificates-certificate"
										key={certificate}
									>
										<Certificate
											key={certificate}
											date={certificate.date}
											title={certificate.title}
											description={
												certificate.description
											}
											link={certificate.link}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificates;
