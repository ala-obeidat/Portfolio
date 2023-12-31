import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ala Obeidat",
	title: "Hi all, I'm Ala",
	description:
		"A passionate Full Stack Web Developer and App Developer having an experience of building Web applications with .Net/ JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks With C#.",
	resumeLink: "https://blog.alaobeidat.com",
};

export const openSource = {
	githubUserName: "ala-obeidat",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/eng.ala.obeidat", 
	twitter: "https://twitter.com/ObeidatEng",
	github: "https://github.com/ala-obeidat",
	linkedin: "https://www.linkedin.com/in/eng-ala-obeidat/",
	pattrion:"https://www.patreon.com/alaobeidat"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Accomplished Research and Development Leader with 9+ years of experience in the information technology and services industry",
	skills: [
		emoji(
			"⚡ Specializing in full-stack solutions for multiple platforms."
		),
		emoji(
			"⚡ Seeking to leverage my expertise in Microsoft technologies."
		),
		emoji(
			"⚡ Expirt in design patterns, integrations,	services, architecture, and pre-sales to contribute to the success of innovative projects."
		),
	],

	softwareSkills: [
		{
			skillName: "dot-net",
			fontAwesomeClassname: "mdi:dot-net",
		},
		{
			skillName: "c-sharp",
			fontAwesomeClassname: "logos:c-sharp",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "redis",
			fontAwesomeClassname: "logos:redis",
		},
		{
			skillName: "rabbitmq",
			fontAwesomeClassname: "logos:rabbitmq",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		
		{
			skillName: "javaScript",
			fontAwesomeClassname: "vscode-icons:file-type-js",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "angular",
			fontAwesomeClassname: "logos:angular",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "55", //Insert relative proficiency in percentage
	},
	{
		Stack: "Applications",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Yarmouk university",
		subHeader: "Bachelor of Computer engineer",
		duration: "September 2009 - April 2014",
		desc: "Involves the design and development of systems based on computers and complex digital logic devices",
		descBullets: [
			"These systems find use in such diverse tasks as computation, communication, entertainment, information processing, artificial intelligence, and control.",
			"Computer engineers will be very much involved with the “Information Highway.”",
		],
	}
];

export const experience = [
	{
		role: "Software Developer",
		company: "T2",
		companylogo: "/img/icons/common/t2logo.png",
		date: "Nov 2014 – Apr 2019",
		desc: "4 years",
		descBullets: [
			"Work in developing, designing, problem solving and technical discussing with learning new things by work with very expert team",
			"I have been involved in many structure design sessions for complex and large products",
		],
	},
	{
		role: "Product Manager",
		company: "kingscote",
		companylogo: "/img/icons/common/kingscote-logo.png",
		date: "May 2019 – May 2020",
		desc: "1 Year",
		descBullets: [
			"Create a compelling business case to secure the purchase and obtain the funding required to embark on the business engineering journey",
			"Using RFID technology, designing and programming IOT devices, working on AI technology that fits clients and solves their problems",
		],
	},
	{
		role: "Software Development Team Lead",
		company: "Ocost",
		companylogo: "/img/icons/common/ocost-logo.png",
		date: "Jun 2020 – Jun 2022",
		desc: "2 Years",
		descBullets: [
			"Analysis, design and development of advance client/server, web based, cloud and n-tier applications",
			"Lead development team to deliver high quality products on time, analyze system requirements and business needs, perform a research and do the proof of concepts for the new technologies and features",
		],
	},
	,
	{
		role: "Senior Software Team Lead",
		company: "Ertikaz",
		companylogo: "/img/icons/common/ertikaz-logo.png",
		date: "Jun 2022 – Present",
		desc: "Current",
		descBullets: [
			"I am responsible for designing, testing, and implementing new and updated software. In addition to assuming an administrative role and leading the development team in all software development tasks",
			" All of this will be to ensure that all projects are completed on time and to the company's specifications",
		],
	},
];

export const projects = [
	{
		name: "RiCH",
		desc: "RiCH is a robust platform that helps enterprise to manage and centralize all their communication in one place",
		link: "https://t2.sa/en/product/rich",
	},
	{
		name: "Ole5",
		desc: "Ole5 is a system for tracking and managing huge amounts of internal, incoming and outgoing messages",
		link: "https://t2.sa/en/product/ole5",
	},
	{
		name: "Supplier Chain",
		desc: "Supplier Chain is an Ocost product to manage and booking orders and products for client and suppliers",
		link: "https://dash.ocost.co",
	},
	{
		name: "Lean Lines",
		desc: "Last mile delevery application to manage orders and delivery process",
		link: "https://overlines.ertikaz.tech",
	},
	{
		name: "Lean Dispatcher",
		desc: "Lean Dispatcher is a system to manage delivery company fleets",
		link: "https://dispatcher.ertikaz.tech",
	},
	{
		name: "Lean Finance",
		desc: "Lean Finance is financial system to manage financial parts such as electronic invoicing, sales and incomes",
		link: "https://finance.ertikaz.tech",
	},
	{
		name: "Lean Inventory",
		desc: "Lean Inventory is financial system to organizing sales, purchasing and inventory management",
		link: "https://inventory.ertikaz.tech",
	},
	{
		name: "Rento",
		desc: "Rento is a system for booking cars and rent it for spacific period",
		github: "https://github.com/ala-obeidat/Rento",
	},
	{
		name: "StarTrack",
		desc: "IoT application Tag & Track Solution using RFID technology",
		github: "https://github.com/ala-obeidat/StarTrack",
	},
	{
		name: "Al-Fajer",
		desc: "Al-Fajer is a video & audio chat application using WebRTC technology",
		github: "https://github.com/ala-obeidat/alfajer",
		link: "https://alfajer.alaobeidat.com",
	},
	{
		name: "Diwan Alhafazah",
		desc: "Quran memorizers service design in angular and dotnet",
		github: "https://github.com/ala-obeidat/diwanalhafazah",
		link: "https://diwanalhafazah.website/",
	},
	{
		name: "Obe Tools",
		desc: "NuGet Package to help any .Net developer",
		link: "https://www.nuget.org/packages/ObeTools/",
	},
];

export const feedbacks = [];
