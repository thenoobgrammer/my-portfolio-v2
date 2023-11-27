import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn, FaMap, FaPhone } from 'react-icons/fa'

import { CgWebsite } from 'react-icons/cg'
import { uniq } from 'lodash'

export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'
export const PORTOFLIO_URL = 'https://thenoobgrammer.com'

export const EMAIL_DESTINATION = 'thenoobgrammer@gmail.com'
export const EMAIL_SUBJECT = 'CLIENT INQUIRY'
export const EMAIL_PUBLIC_KEY = 'gdUsqVZJvLcgL1JXC'
export const EMAIL_SERVICE_ID = 'service_gbfzv1f'
export const EMAIL_TEMPLATE_ID = 'template_k1dy7ba'

export const Address = 'Montreal, QC'
export const Phone = '+1 514-966-8481'
export const Email = 'ant.hakim.stud@gmail.com'
export const SpokenLanguages = ['English', 'French']
export const Website = { url: 'https://thenoobgrammer.com', text: 'My Website' }

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
	'React',
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

export const FE_Frameworks = [
	{ name: 'CSS', tag: 'css', url: 'https://www.w3schools.com/css/' },
	{ name: 'Ember.js', tag: 'ember', url: 'https://emberjs.com/' },
	{ name: 'HTML', tag: 'html', url: 'https://www.w3schools.com/html/' },
	{ name: 'Javascript', tag: 'js', url: 'https://www.javascript.com/' },
	{ name: 'React 18', tag: 'react', url: 'https://react.dev/blog/2022/03/29/react-v18' },
	{ name: 'NextJS', tag: 'next', url: 'https://nextjs.org/' },
	{ name: 'Typescript', tag: 'typescript', url: 'https://www.typescriptlang.org/' },
	{ name: 'Redux Thunk', tag: 'redux', url: 'https://redux.js.org/usage/writing-logic-thunks' },
	{ name: 'Tailwind', tag: 'tailwind', url: 'https://tailwindcss.com/' },
	{
		name: 'React Testing Library',
		tag: 'react-test',
		url: 'https://testing-library.com/docs/react-testing-library/intro/',
	},
	{ name: 'Jest', tag: 'jest-test', url: 'https://jestjs.io/' },
	{ name: 'Stencil', tag: 'stencil', url: 'https://stenciljs.com/' },
	{
		name: 'Polymer Library',
		tag: 'polymer',
		url: 'https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview',
	},
]

export const BE_Frameworks = [
	{ name: 'C#', tag: 'csharp', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
	{ name: 'Node.js', tag: 'node', url: 'https://nodejs.org/en/' },
	{ name: 'Python', tag: 'python', url: 'https://www.python.org/' },
	{ name: 'Spring', tag: 'java', url: 'https://spring.io/projects/spring-boot' },
]

export const DB_Frameworks = [
	{
		name: 'MySQL',
		tag: 'mysql',
		url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiL0qqEwtGCAxW9AzQIHecBCvcQFnoECAcQAQ&url=https%3A%2F%2Fwww.mysql.com%2F&usg=AOvVaw20c6IrMAtNC1A9NZPsDpWW&opi=89978449',
	},
	{ name: 'MongoDb', tag: 'mongodb', url: 'https://www.mongodb.com/' },
]

export const DeploymentTools = [
	{ name: 'Ansible', tag: 'ansible', url: 'https://www.ansible.com/' },
	{ name: 'Concourse CI', tag: 'concourse', url: 'https://concourse-ci.org/' },
	{ name: 'Docker', tag: 'docker', url: 'https://www.docker.com/' },
	{ name: 'EC2', tag: 'ec2', url: 'https://aws.amazon.com/ec2/' },
	{ name: 'Github Actions', tag: 'git-actions', url: 'https://www.terraform.io/' },
	{ name: 'Jenkins', tag: 'jenkins', url: 'https://www.jenkins.io/' },
	{ name: 'S3', tag: 's3', url: 'https://aws.amazon.com/s3/' },
	{ name: 'Certificate Manager', tag: 'acm', url: 'https://aws.amazon.com/certificate-manager/' },
	{ name: 'Route 53', tag: 'route53', url: 'https://aws.amazon.com/route53/' },
	{ name: 'Terraform', tag: 'terraform', url: 'https://www.terraform.io/' },
	{ name: 'SonarQube', tag: 'sonar', url: 'https://www.sonarsource.com/products/sonarqube/' },
	{ name: 'CloudFoundry', tag: 'cf', url: 'https://www.cloudfoundry.org/' },
]

export const ExternalSaas = [
	{ name: 'Liferay', tag: 'liferay', url: 'https://www.liferay.com/' },
	{ name: 'GoogleAPI', tag: 'google', url: 'https://developers.google.com/apis-explorer' },
]

export const ExternalPlanningTools = [
	{ name: 'Jira', tag: 'jira', url: 'https://www.atlassian.com/software/jira' },
	{ name: 'Confluence', tag: 'confluence', url: 'https://www.atlassian.com/software/confluence' },
]

export const VersionningTools = [
	{ name: 'Bitbucket', tag: 'bitbucket', url: 'https://bitbucket.org/product' },
	{ name: 'Github', tag: 'git', url: 'https://github.com/' },
	{ name: 'Gitlab', tag: 'gitlab', url: 'https://about.gitlab.com/' },
]

export const Concepts = [
	{ name: 'REST API', tag: 'rest', url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api' },
	{ name: 'React HOC', tag: 'hoc', url: 'https://legacy.reactjs.org/docs/higher-order-components.html' },
	{ name: 'Custom hooks', tag: 'hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
	{ name: 'Microservice architecture', tag: 'microservice', url: 'https://microservices.io/' },
	{ name: 'TDD', tag: 'tdd', url: 'https://www.browserstack.com/guide/what-is-test-driven-development' },
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
		url: 'https://goto.com',
		end: 'Present',
		company: 'GoTo',
		title: 'Senior Frontend Engineer',
		descriptions: ['GoTo.a', 'GoTo.b', 'GoTo.c', 'GoTo.d', 'GoTo.e', 'GoTo.f', 'GoTo.g', 'GoTo.h'],
		summary: 'GoTo.summary',
		technologies: extract([
			'react',
			'redux',
			'typescript',
			'react-test',
			'jest-test',
			'jenkins',
			'git',
			'confluence',
			'bitbucket',
			'rest',
			'sonar',
		]),
	},
	{
		id: 'desjardins',
		start: 'Dec 2020',
		end: 'Jan 2022',
		logoClassname: 'bg-desjardins-white',
		url: 'https://desjardins.com',
		company: 'Desjardins',
		title: 'Fullstack engineer',
		summary: 'Desjardins.summary',
		descriptions: ['Desjardins.a', 'Desjardins.b', 'Desjardins.c', 'Desjardins.d', 'Desjardins.e', 'Desjardins.f'],
		technologies: extract([
			'java',
			'stencil',
			'html',
			'css',
			'cf',
			'concourse',
			'jira',
			'confluence',
			'bitbucket',
			'rest',
			'liferay',
			'sonar',
		]),
	},
	{
		id: 'bell',
		start: 'Jan 2019',
		end: 'May 2019',
		logoClassname: 'bg-bell-white',
		url: 'https://bell.ca',
		company: 'Bell',
		title: 'Fullstack engineer',
		descriptions: ['Bell.a', 'Bell.b', 'Bell.c', 'Bell.d', 'Bell.e'],
		summary: 'Bell.summary',
		technologies: extract([
			'csharp',
			'ember',
			'mysql',
			'html',
			'css',
			'jira',
			'confluence',
			'bitbucket',
			'docker',
			'rest',
		]),
	},
	{
		id: 'ubisoft',
		start: 'Jan 2018',
		end: 'May 2018',
		logoClassname: 'bg-ubisoft',
		url: 'https://ubisoft.com',
		title: 'Intern Frontend developer',
		company: 'Ubisoft',
		descriptions: ['Ubisoft.a', 'Ubisoft.b', 'Ubisoft.c', 'Ubisoft.d', 'Ubisoft.e'],
		summary: 'Ubisoft.summary',
		technologies: extract([
			'csharp',
			'ember',
			'mysql',
			'html',
			'css',
			'jira',
			'confluence',
			'bitbucket',
			'docker',
			'rest',
		]),
	},
]

export const PersonalProjects = [
	{
		name: 'Pickside',
		type: 'Custom website',
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
		technologies: extract([
			'react',
			'node',
			'redux',
			'google-api',
			'typescript',
			'tailwind',
			'github',
			'mongodb',
			'docker',
			'ec2',
			's3',
			'route53',
			'acm',
		]),
	},
	{
		name: 'Portfolio V1',
		type: 'Portfolio',
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
		technologies: extract(['react', 'tailwind', 'route53', 'acm', 's3']),
	},
	{
		name: 'Portfolio V2',
		type: 'Portfolio',
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
		technologies: extract(['next', 'react', 'tailwind', 'route53', 'acm', 's3']),
	},
	{
		name: 'Discord',
		type: 'Service',
		summary: 'Discord.summary',
		gitUrl: DISCORD_GIT_REPO,
		descriptions: ['Discord.a', 'Discord.b'],
		descriptionsHighlighted: ['DiscordHighlighted.a', 'DiscordHighlighted.b'],
		technologies: extract(['node', 'git', 'typescript', 'ec2']),
	},
	{
		name: 'Sadbois',
		type: 'E commerce website',
		summary: 'Sadbois.summary',
		gitUrl: SADBOIS_GIT_REPO,
		descriptions: ['Sadbois.a', 'Sadbois.b', 'Sadbois.c'],
		descriptionsHighlighted: ['SadboisHighlighted.a', 'SadboisHighlighted.b', 'SadboisHighlighted.c'],
		technologies: extract(['react', 'github', 'rest', 'typescript']),
	},
]

export function extract(tags: string[]) {
	return [].concat.apply(
		[],
		[
			uniq(BE_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(Concepts.filter((el) => tags.includes(el.tag))),
			uniq(DB_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(DeploymentTools.filter((el) => tags.includes(el.tag))),
			uniq(ExternalPlanningTools.filter((el) => tags.includes(el.tag))),
			uniq(ExternalSaas.filter((el) => tags.includes(el.tag))),
			uniq(FE_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(VersionningTools.filter((el) => tags.includes(el.tag))),
		],
	)
}
