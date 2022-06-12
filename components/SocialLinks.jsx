import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			<Button
				className="btn-icon-only rounded-circle"
				color="twitter"
				href={socialLinks.twitter}
				target="_blank"
				rel="noopener"
				aria-label="Twitter"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-twitter" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="facebook"
				href={socialLinks.facebook}
				target="_blank"
				rel="noopener"
				aria-label="Facebook"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-facebook-square" />
				</span>
			</Button>
			 
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="github"
				href={socialLinks.github}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-github" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="default"
				rel="noopener"
				aria-label="Linkedin"
				href={socialLinks.linkedin}
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-linkedin" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="danger"
				rel="noopener"
				aria-label="patreon"
				href={socialLinks.pattrion}
				target="_blank"
			>
				<span className="sc-llYSUQ fwLquN"><svg height="26px" version="1.1" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg"><title>Patreon logo</title><g><circle cx="362.589996" cy="204.589996" data-fill="1" r="204.589996"></circle><rect data-fill="1" height="545.799988" width="100" x="0" y="0"></rect></g></svg></span>
			</Button>
		</div>
	);
};

export default SocialLinks;
