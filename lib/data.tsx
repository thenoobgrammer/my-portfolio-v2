import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn, FaMap, FaPhone } from 'react-icons/fa'

import { CgWebsite } from 'react-icons/cg'

export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'
export const PORTOFLIO_URL = 'https://thenoobgrammer.com'

export const EMAIL_DESTINATION = 'thenoobgrammer@gmail.com'
export const EMAIL_SUBJECT = 'CLIENT INQUIRY'
export const EMAIL_PUBLIC_KEY = 'gdUsqVZJvLcgL1JXC'
export const EMAIL_SERVICE_ID = 'service_gbfzv1f'
export const EMAIL_TEMPLATE_ID = 'template_k1dy7ba'

export const Address = { icon: FaMap, text: 'Montreal, QC' }
export const Phone = { icon: FaPhone, text: '+1 514-966-8481' }
export const Email = { icon: FaEnvelope, text: 'ant.hakim.stud@gmail.com' }
export const SpokenLanguages = { icon: FaGlobe, text: ['English', 'French'] }
export const Website = { icon: CgWebsite, url: 'https://thenoobgrammer.com', text: 'My Website' }

const DISCORD_GIT_REPO = 'https://github.com/thenoobgrammer/bramble'
const PICKSIDE_GIT_REPO = 'https://github.com/PickSide'
const PORTFOLIO_V1_GIT_REPO = 'https://github.com/thenoobgrammer/my-portfolio'
const PORTFOLIO_V2_GIT_REPO = 'https://github.com/thenoobgrammer/my-portfolio-v2'
const SADBOIS_GIT_REPO = 'https://github.com/orgs/Sadboiss/repositories'
const PICKSIDE_URL = 'https://pickside.net'
const PORTFOLIO_V1_URL = 'https://thenoobgrammer.com'
const PORTFOLIO_V2_URL = 'https://v2.thenoobgrammer.com'

export const LinkedIn = {
	icon: FaLinkedinIn,
	url: 'https://www.linkedin.com/in/antoine-hakim-359669105/',
	text: 'My LinkedIn',
}
export const Github = { icon: FaGithub, url: 'https://github.com/thenoobgrammer', text: 'My Github' }

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
		logoClassname: 'bg-desjardins-white',
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
		logoClassname: 'bg-bell-white',
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
		title: 'Intern Frontend developer',
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
		gitUrl: PICKSIDE_GIT_REPO,
		url: PICKSIDE_URL,
		summary: 'Pickside.summary',
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
		name: 'Portfolio V1',
		title: 'Web development',
		gitUrl: PORTFOLIO_V1_GIT_REPO,
		url: PORTFOLIO_V1_URL,
		summary: 'PortfolioV1.summary',
		descriptions: [
			'PortfolioV1.a',
			'PortfolioV1.b',
			'PortfolioV1.c',
			'PortfolioV1.d',
			'PortfolioV1.e',
			'PortfolioV1.f',
			'PortfolioV1.g',
		],
		descriptionsHighlighted: [
			'PortfolioV1ighlighted.a',
			'PortfolioV1ighlighted.b',
			'PortfolioV1ighlighted.c',
			'PortfolioV1ighlighted.d',
			'PortfolioV1ighlighted.e',
			'PortfolioV1ighlighted.f',
			'PortfolioV1ighlighted.g',
		],
		technologies: ['React 18', 'Tailwind CSS', 'Route 53', 'Certificate Manager', 'S3'],
	},
	{
		name: 'Portfolio V2',
		title: 'Web development',
		url: PORTFOLIO_V2_URL,
		gitUrl: PORTFOLIO_V2_GIT_REPO,
		summary: 'PortfolioV2.summary',
		descriptions: [
			'PortfolioV2.a',
			'PortfolioV2.b',
			'PortfolioV2.c',
			'PortfolioV2.d',
			'PortfolioV2.e',
			'PortfolioV2.f',
			'PortfolioV2.g',
		],
		descriptionsHighlighted: [
			'PortfolioV2Highlighted.a',
			'PortfolioV2Highlighted.b',
			'PortfolioV2Highlighted.c',
			'PortfolioV2Highlighted.d',
			'PortfolioV2Highlighted.e',
			'PortfolioV2Highlighted.f',
			'PortfolioV2Highlighted.g',
		],
		technologies: ['React 18', 'Tailwind CSS', 'Route 53', 'Certificate Manager', 'S3'],
	},
	{
		name: 'Discord',
		title: 'Rest API application',
		summary: 'Discord.summary',
		gitUrl: DISCORD_GIT_REPO,
		descriptions: ['Discord.a', 'Discord.b'],
		descriptionsHighlighted: ['DiscordHighlighted.a', 'DiscordHighlighted.b'],
		technologies: ['NodeJS', 'Express', 'GitHub', 'Typescript', 'AWS (EC2)'],
	},
	{
		name: 'Sadbois',
		title: 'Rest API application',
		summary: 'Sadbois.summary',
		gitUrl: SADBOIS_GIT_REPO,
		descriptions: ['Sadboiss.a', 'Sadboiss.b', 'Sadboiss.c'],
		descriptionsHighlighted: ['SadboissHighlighted.a', 'SadboissHighlighted.b', 'SadboissHighlighted.c'],
		technologies: ['ReactJS', 'GitHub', 'REST API', 'Typescript', 'Paypal API'],
	},
]
