import { FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaLinkedinIn, FaMap, FaPhone } from 'react-icons/fa'

import { CgWebsite } from 'react-icons/cg'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'
export const PORTOFLIO_URL = 'https://thenoobgrammer.com'

export const EMAIL_DESTINATION = 'thenoobgrammer@gmail.com'
export const EMAIL_SUBJECT = 'CLIENT INQUIRY'
export const EMAIL_PUBLIC_KEY = 'gdUsqVZJvLcgL1JXC'
export const EMAIL_SERVICE_ID = 'service_gbfzv1f'
export const EMAIL_TEMPLATE_ID = 'template_k1dy7ba'

export const PersonalInfo = [
	{ icon: FaMap, text: 'Montreal, QC' },
	{ icon: FaPhone, text: '+1 514-966-8481' },
	{ icon: FaEnvelope, text: 'ant.hakim.stud@gmail.com' },
	{ icon: FaGlobe, text: ['English', 'French'] },
	{ icon: CgWebsite, url: 'https://thenoobgrammer.com', text: 'My Website' },
	{ icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/antoine-hakim-359669105/', text: 'My LinkedIn' },
	{ icon: FaGithub, url: 'https://github.com/thenoobgrammer', text: 'My Github' },
]

export const Links = [
	{ name: 'home', hash: '#home' },
	{ name: 'about', hash: '#about' },
	{ name: 'career', hash: '#career' },
	{ name: 'timeline', hash: '#timeline' },
	{ name: 'services', hash: '#services' },
]

export const Languages = [
	'ReactJS',
	'NodeJS',
	'Javascript/HTML/CSS',
	'AWS',
	'StencilJS',
	'SpringBoot',
	'Python',
	'C#',
	'EmberJS',
	'PolymerJS',
	'Angular',
]

export const Education = [
	{ start: '2016', end: '2020', institution: 'ETS', program: 'Software Engineering' },
	{ start: '2015', end: '2016', institution: 'UQAM', program: 'Computer Science (Certificate' },
	{ start: '2011', end: '2014', institution: 'Vanier College', program: 'Computer Science & technology' },
]

export const WorkExperiences = [
	{
		id: 'goto',
		start: 'Jan 2022',
		logoClassname: 'bg-goto-color',
		link: 'https://goto.com',
		end: 'Present',
		company: 'GoTo',
		title: 'Senior Frontend Engineer',
		descriptions: ['GoTo.a', 'GoTo.b', 'GoTo.c', 'GoTo.d', 'GoTo.e', 'GoTo.f', 'GoTo.g', 'GoTo.h'],
		summary: 'GoTo.summary',
		descriptionsHighlighted: [
			'GoToHighlighted.a',
			'GoToHighlighted.b',
			'GoToHighlighted.c',
			'GoToHighlighted.d',
			'GoToHighlighted.e',
			'GoToHighlighted.f',
			'GoToHighlighted.g',
			'GoToHighlighted.h',
		],
		technologies: [
			'ReactJS 18',
			'Redux-Thunk',
			'React testing library',
			'Jest',
			'Jenkins',
			'Git',
			'GitHub',
			'Confluence',
			'Bitbucket',
			'REST API',
			'SonarQube',
		],
	},
	{
		id: 'desjardins',
		start: 'Dec 2020',
		end: 'Jan 2022',
		logoClassname: 'bg-desjardin-color',
		link: 'https://desjardins.com',
		company: 'Desjardins',
		title: 'Fullstack engineer',
		summary: 'Desjardins.summary',
		descriptions: ['Desjardins.a', 'Desjardins.b', 'Desjardins.c', 'Desjardins.d', 'Desjardins.e', 'Desjardins.f'],
		descriptionsHighlighted: [
			'DesjardinsHighlighted.a',
			'DesjardinsHighlighted.b',
			'DesjardinsHighlighted.c',
			'DesjardinsHighlighted.d',
			'DesjardinsHighlighted.e',
			'DesjardinsHighlighted.f',
		],
		technologies: [
			'Spring Boot',
			'StencilJs',
			'AngularJS',
			'CloudFoundry',
			'HTML/CSS',
			'ConcourseCI',
			'Jira',
			'Confluence',
			'Bitbucket',
			'REST API',
			'Liferay',
			'SonarQube',
		],
	},
	{
		id: 'bell',
		start: 'Jan 2019',
		end: 'May 2019',
		logoClassname: 'bg-bell-color',
		link: 'https://bell.ca',
		company: 'Bell Canada',
		title: 'Fullstack engineer',
		descriptions: ['Bell.a', 'Bell.b', 'Bell.c', 'Bell.d', 'Bell.e'],
		summary: 'Bell.summary',
		descriptionsHighlighted: [
			'BellHighlighted.a',
			'BellHighlighted.b',
			'BellHighlighted.c',
			'BellHighlighted.d',
			'BellHighlighted.e',
		],
		technologies: [
			'C#',
			'Ember',
			'MySQL',
			'HTML/CSS',
			'Bootstrap',
			'Jira, Bamboo',
			'Confluence',
			'Bitbucket',
			'Docker',
			'Kubernetes',
			'REST API',
		],
	},
	{
		id: 'ubisoft',
		start: 'Jan 2018',
		end: 'May 2018',
		logoClassname: 'bg-ubisoft',
		link: 'https://ubisoft.com',
		title: 'Interne Frontend developer',
		company: 'Ubisoft',
		descriptions: ['Ubisoft.a', 'Ubisoft.b', 'Ubisoft.c', 'Ubisoft.d', 'Ubisoft.e'],
		summary: 'Ubisoft.summary',
		descriptionsHighlighted: [
			'BellHighlighted.a',
			'BellHighlighted.b',
			'BellHighlighted.c',
			'BellHighlighted.d',
			'BellHighlighted.e',
		],
		technologies: [
			'C#',
			'Ember',
			'MySQL',
			'HTML/CSS',
			'Bootstrap',
			'Jira',
			'Bamboo',
			'Confluence',
			'Bitbucket',
			'Docker',
			'Kubernetes',
			'REST API',
		],
	},
]

export const PersonalProjects = [
	{
		name: 'Pickside',
		title: 'Rest API application',
		repoURL: ['Pickside.repo'],
		websiteURL: {
			ref: 'Pickside.website',
			placeholder: 'Pickside.accessWebsite',
		},
		descriptions: [
			'Pickside.a',
			'Pickside.b',
			'Pickside.c',
			'Pickside.d',
			'Pickside.e',
			'Pickside.f',
			'Pickside.g',
			'Pickside.h',
			'Pickside.i',
			'Pickside.j',
			'Pickside.k',
		],
		descriptionsHighlighted: [
			'PicksideHighlighted.a',
			'PicksideHighlighted.b',
			'PicksideHighlighted.c',
			'PicksideHighlighted.d',
			'PicksideHighlighted.e',
			'PicksideHighlighted.f',
			'PicksideHighlighted.g',
			'PicksideHighlighted.h',
			'PicksideHighlighted.i',
			'PicksideHighlighted.j',
			'PicksideHighlighted.k',
		],
		technologies: [
			'NodeJS/Express',
			'React 18',
			'Redux-Thunk',
			'Google API',
			'Typescript',
			'MongoDB/NoSQL',
			'Github',
			'Docker',
			'AWS (Route 53, Certificate Manager',
			'EC2',
		],
	},
	{
		name: 'Portfolio',
		title: 'Web development',
		repoURL: ['Portfolio.repo'],
		descriptions: [
			'Portfolio.a',
			'Portfolio.b',
			'Portfolio.c',
			'Portfolio.d',
			'Portfolio.e',
			'Portfolio.f',
			'Portfolio.g',
		],
		descriptionsHighlighted: [
			'PortfolioHighlighted.a',
			'PortfolioHighlighted.b',
			'PortfolioHighlighted.c',
			'PortfolioHighlighted.d',
			'PortfolioHighlighted.e',
			'PortfolioHighlighted.f',
			'PortfolioHighlighted.g',
		],
		technologies: ['React 18', 'Tailwind CSS', 'Route 53', 'Certificate Manager', 'S3'],
	},
	{
		name: 'Discord',
		title: 'Rest API application',
		repoURL: ['Discord.repo'],
		descriptions: ['Discord.a', 'Discord.b'],
		descriptionsHighlighted: ['DiscordHighlighted.a', 'DiscordHighlighted.b'],
		technologies: ['NodeJS', 'Express', 'GitHub', 'Typescript', 'AWS (EC2)'],
	},
	{
		name: 'Sadbois',
		title: 'Rest API application',
		repoURL: ['Sadboiss.repo'],
		descriptions: ['Sadboiss.a', 'Sadboiss.b', 'Sadboiss.c'],
		descriptionsHighlighted: ['SadboissHighlighted.a', 'SadboissHighlighted.b', 'SadboissHighlighted.c'],
		technologies: ['ReactJS', 'GitHub', 'REST API', 'Typescript', 'Paypal API'],
	},
]
