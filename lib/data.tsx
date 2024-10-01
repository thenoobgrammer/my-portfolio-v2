import { FaCloud, FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'

import { GiSkills } from 'react-icons/gi'
import { IoIosInfinite } from 'react-icons/io'
import { uniq } from 'lodash'

export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-h-359669105/'
export const INSTAGRAM_URL = 'https://instagram.com/inotmikah?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
export const PORTOFLIO_URL = 'https://thenoobgrammer.com'

export const EMAIL_DESTINATION = 'thenoobgrammer@gmail.com'
export const EMAIL_SUBJECT = 'CLIENT INQUIRY'
export const EMAIL_PUBLIC_KEY = 'gdUsqVZJvLcgL1JXC'
export const EMAIL_SERVICE_ID = 'service_gbfzv1f'
export const EMAIL_TEMPLATE_ID = 'template_k1dy7ba'

export const Address = 'Montreal, QC'
export const Phone = '+1514-966-8481'
export const Email = 'antonyyhakim@gmail.com'
export const SpokenLanguages = ['English', 'French']
export const Website = { url: 'https://thenoobgrammer.com', text: 'My Website' }

const PICKSIDE_URL = 'https://pickside.net'
const PICKSIDE_GIT_REPO = 'https://github.com/PickSide'
const PORTFOLIO_V1_URL = 'https://v1.antoinehakim.ca'
const PORTFOLIO_V1_GIT_REPO = 'https://github.com/thenoobgrammer/my-portfolio'
const PORTFOLIO_V2_URL = 'https://antoinehakim.ca'
const PORTFOLIO_V2_GIT_REPO = 'https://github.com/thenoobgrammer/my-portfolio-v2'

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
	{ name: 'CSS3', tag: 'css', url: 'https://www.w3schools.com/css/' },
	{ name: 'Ember.js', tag: 'ember', url: 'https://emberjs.com/' },
	{ name: 'HTML', tag: 'html', url: 'https://www.w3schools.com/html/' },
	{ name: 'Javascript', tag: 'js', url: 'https://www.javascript.com/' },
	{ name: 'React 18', tag: 'react', url: 'https://react.dev/blog/2022/03/29/react-v18' },
	{ name: 'NextJS', tag: 'next', url: 'https://nextjs.org/' },
	{ name: 'Vite', tag: 'vite', url: 'https://vitejs.dev/' },
	{ name: 'Jest', tag: 'jest-test', url: 'https://jestjs.io/' },
	{ name: 'Stencil', tag: 'stencil', url: 'https://stenciljs.com/' },
	{ name: 'Typescript', tag: 'typescript', url: 'https://www.typescriptlang.org/' },
	{
		name: 'Polymer Library',
		tag: 'polymer',
		url: 'https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview',
	},
]

export const FE_Libs = [
	{ name: 'Material UI 5', tag: 'mui5', url: 'https://mui.com/material-ui/' },
	{ name: 'Redux', tag: 'redux', url: 'https://redux.js.org/usage/writing-logic-thunks' },
	{ name: 'React Query', tag: 'react-query', url: 'https://tanstack.com/query/v3/' },
	{
		name: 'React Testing Library',
		tag: 'react-test',
		url: 'https://testing-library.com/docs/react-testing-library/intro/',
	},
	{ name: 'Tailwind', tag: 'tailwind', url: 'https://tailwindcss.com/' },
]

export const BE_Frameworks = [
	{ name: 'C#', tag: 'csharp', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
	{ name: 'Node.js', tag: 'node', url: 'https://nodejs.org/en/' },
	{ name: 'Python', tag: 'python', url: 'https://www.python.org/' },
	{ name: 'Spring', tag: 'java', url: 'https://spring.io/projects/spring-boot' },
	{ name: 'Go', tag: 'go', url: 'https://go.dev/doc/effective_go#introduction' },
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
	{ name: 'AWS', tag: 'aws', url: 'https://aws.amazon.com/' },
	{ name: 'Terraform', tag: 'terraform', url: 'https://www.terraform.io/' },
	{ name: 'SonarQube', tag: 'sonar', url: 'https://www.sonarsource.com/products/sonarqube/' },
	{ name: 'CloudFoundry', tag: 'cf', url: 'https://www.cloudfoundry.org/' },
	{ name: 'Vercel', tag: 'vercel', url: 'https://vercel.com/' },
]

export const DomainsManager = [
	{ name: 'Cloudflare', tag: 'concourse', url: 'https://www.cloudflare.com/en-ca/' },
	{ name: 'Certificate Manager', tag: 'acm', url: 'https://aws.amazon.com/certificate-manager/' },
	{ name: 'Godaddy', tag: 'godaddy', url: 'https://www.godaddy.com/en-ca' },
	{ name: 'Route 53', tag: 'route53', url: 'https://aws.amazon.com/route53/' },
]

export const ExternalSaas = [
	{ name: 'Liferay', tag: 'liferay', url: 'https://www.liferay.com/' },
	{ name: 'GoogleAPI', tag: 'google', url: 'https://developers.google.com/apis-explorer' },
]

export const ExternalPlanningTools = [
	{ name: 'Jira', tag: 'jira', url: 'https://www.atlassian.com/software/jira' },
	{ name: 'Confluence', tag: 'confluence', url: 'https://www.atlassian.com/software/confluence' },
	{ name: 'Sphinx Documentation', tag: 'sphinx', url: 'https://www.sphinx-doc.org/en/master/' },
]

export const VersionningTools = [
	{ name: 'Bitbucket', tag: 'bitbucket', url: 'https://bitbucket.org/product' },
	{ name: 'Github', tag: 'git', url: 'https://github.com/' },
	{ name: 'Gitlab', tag: 'gitlab', url: 'https://about.gitlab.com/' },
]

export const CLIs = [
	{ name: 'Bash CLI', tag: 'bash', url: 'https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html' },
]

export const Concepts = [
	{ name: 'REST API', tag: 'rest', url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api' },
	{ name: 'React HOC', tag: 'hoc', url: 'https://legacy.reactjs.org/docs/higher-order-components.html' },
	{
		name: 'S.O.L.I.D',
		tag: 'solid',
		url: 'https://www.freecodecamp.org/news/solid-design-principles-in-software-development/',
	},
	{ name: 'Custom hooks', tag: 'hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
	{ name: 'Microservice architecture', tag: 'microservice', url: 'https://microservices.io/' },
	{ name: 'TDD', tag: 'tdd', url: 'https://www.browserstack.com/guide/what-is-test-driven-development' },
]

export const Education = [
	{ start: '2016', end: '2020', institution: 'ETS', program: 'Software Engineering' },
	{ start: '2015', end: '2016', institution: 'UQAM', program: 'Computer Science (Certificate)' },
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
		title: 'Senior frontend engineer',
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
			'rest',
			'sonar',
			'solid',
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
		descriptions: ['Desjardins.a', 'Desjardins.b', 'Desjardins.c', 'Desjardins.d', 'Desjardins.e'],
		technologies: extract(['java', 'stencil', 'html', 'css', 'cf', 'concourse', 'rest', 'liferay', 'sonar']),
	},
	{
		id: 'bell',
		start: 'May 2019',
		end: 'May 2020',
		logoClassname: 'bg-bell-white',
		url: 'https://bell.ca',
		company: 'Bell',
		title: 'Fullstack engineer',
		descriptions: ['Bell.a', 'Bell.b', 'Bell.c', 'Bell.d', 'Bell.e'],
		summary: 'Bell.summary',
		technologies: extract(['csharp', 'mysql', 'docker', 'ember', 'html', 'css', 'rest']),
	},
	{
		id: 'ubisoft',
		start: 'Jan 2018',
		end: 'May 2018',
		logoClassname: 'bg-ubisoft-white',
		url: 'https://www.ubisoft.com/en-ca/',
		company: 'Ubisoft',
		title: 'Intern frontend engineer',
		descriptions: ['Ubisoft.a', 'Ubisoft.b', 'Ubisoft.c', 'Ubisoft.d', 'Ubisoft.e'],
		summary: 'Ubisoft.summary',
		technologies: extract(['docker', 'polymer', 'typescript', 'html', 'css', 'jira']),
	},
]
export const Skillsets = [
	{
		title: 'Dev.title',
		icon: <FaCode size={20} className="text-accent" />,
		metaData: ['stack', 'authentication', 'docker', 'versionning'].map((s) => `Dev.${s}`),
		expandedDefault: true,
	},
	{
		title: 'Soft.title',
		icon: <GiSkills size={20} className="text-accent" />,
		metaData: ['adaptability', 'communication', 'learning', 'problemSolving', 'resilience', 'teamwork'].map(
			(s) => `Soft.${s}`,
		),
		expandedDefault: false,
	},
	{
		title: 'Cloud.title',
		icon: <FaCloud size={20} className="text-accent" />,
		metaData: ['tools', 'aws', 'google', 'experience', 'challenges'].map((s) => `Cloud.${s}`),
		expandedDefault: false,
	},
	{
		title: 'Devops.title',
		icon: <IoIosInfinite size={20} className="text-accent" />,
		metaData: ['integration', 'microservices', 'automation', 'security', 'commits', 'scripts', 'containerize'].map(
			(s) => `Devops.${s}`,
		),
		expandedDefault: false,
	},
]
export const PersonalProjects = [
	{
		name: 'Pickside',
		tag: 'pickside',
		type: 'Custom website',
		gitUrl: PICKSIDE_GIT_REPO,
		url: PICKSIDE_URL,
		imgSrc: '/pickside.png',
		summary: 'Pickside.summary',
		summaryWithStack: 'Pickside.summarywithstack',
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
		technologies: extract(['go', 'mysql', 'aws', 'react', 'redux', 'typescript', 'tailwind']),
	},
	{
		name: 'Portfolio V1',
		type: 'Portfolio',
		tag: 'pv1',
		gitUrl: PORTFOLIO_V1_GIT_REPO,
		url: PORTFOLIO_V1_URL,
		imgSrc: '/portfolio_v1.png',
		summary: 'PortfolioV1.summary',
		summaryWithStack: 'PortfolioV1.summarywithstack',
		descriptions: [
			'PortfolioV1.a',
			'PortfolioV1.b',
			'PortfolioV1.c',
			'PortfolioV1.d',
			'PortfolioV1.e',
			'PortfolioV1.f',
			'PortfolioV1.g',
		],
		technologies: extract(['aws', 'react', 'tailwind']),
	},
	{
		name: 'Portfolio V2',
		type: 'Portfolio',
		tag: 'pv2',
		imgSrc: '/portfolio_v2.png',
		url: PORTFOLIO_V2_URL,
		gitUrl: PORTFOLIO_V2_GIT_REPO,
		summary: 'PortfolioV2.summary',
		summaryWithStack: 'PortfolioV2.summarywithstack',
		descriptions: [
			'PortfolioV2.a',
			'PortfolioV2.b',
			'PortfolioV2.c',
			'PortfolioV2.d',
			'PortfolioV2.e',
			'PortfolioV2.f',
			'PortfolioV2.g',
		],
		technologies: extract(['aws', 'next', 'tailwind']),
	},
]

export function extract(tags: string[]) {
	return [].concat.apply(
		[],
		[
			uniq(BE_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(DB_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(DeploymentTools.filter((el) => tags.includes(el.tag))),
			uniq(ExternalSaas.filter((el) => tags.includes(el.tag))),
			uniq(Concepts.filter((el) => tags.includes(el.tag))),
			uniq(FE_Frameworks.filter((el) => tags.includes(el.tag))),
			uniq(FE_Libs.filter((el) => tags.includes(el.tag))),
			uniq(VersionningTools.filter((el) => tags.includes(el.tag))),
			uniq(CLIs.filter((el) => tags.includes(el.tag))),
			uniq(ExternalPlanningTools.filter((el) => tags.includes(el.tag))),
		],
	)
}
