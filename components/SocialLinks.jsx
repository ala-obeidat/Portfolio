import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			<Button title="twitter"
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
			<Button title="Facebook"
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
			 
			<Button title="GitHub"
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
			<Button title="Linked in"
				className="btn-icon-only rounded-circle ml-1"
				color="warning"
				rel="noopener"
				aria-label="Linkedin"
				href={socialLinks.linkedin}
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-linkedin" />
				</span>
			</Button>
			<Button title="Support me at Patreon"
				className="btn-icon-only rounded-circle ml-1"
				color="danger"
				rel="noopener"
				aria-label="patreon"
				href={socialLinks.pattrion}
				target="_blank"
			>
				<img width="13.14" height="15" alt="Support me at Patreon" src="/img/icons/common/patrion.png" />
			</Button>
		</div>
	);
};

export default SocialLinks;
