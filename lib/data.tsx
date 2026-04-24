import { FaCloud, FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'

import { GiSkills } from 'react-icons/gi'
import { IoIosInfinite } from 'react-icons/io'
import { CAREER, PROJECTS } from './content'
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

const ACTIVIE_URL = 'https://pickside.net'
const ACTIVIE_GIT_REPO = 'https://github.com/thenoobgrammer/activie-main-service'
const GAME_ENGINE_GIT_REPO = 'https://github.com/thenoobgrammer/2dgamengine'
const ONEBRC_GIT_REPO = 'https://github.com/thenoobgrammer/1brc'

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
	'Javascript',
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
	{ name: 'Java', tag: 'java', url: 'https://www.java.com/' },
	{ name: 'Spring', tag: 'spring', url: 'https://spring.io/projects/spring-boot' },
	{ name: 'Go', tag: 'go', url: 'https://go.dev/doc/effective_go#introduction' },
	{ name: 'C++', tag: 'cpp', url: 'https://cplusplus.com/' },
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
	{ name: 'Concurrency', tag: 'crc', url: 'https://en.wikipedia.org/wiki/Concurrency_(computer_science)' },
	{ name: 'ECS', tag: 'ecs', url: 'https://en.wikipedia.org/wiki/Entity_component_system' },
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
		title: 'Senior software engineer',
		summary: CAREER.goto.summary,
		descriptions: CAREER.goto.descriptions,
		technologies: extract([
			'react',
			'typescript',
			'java',
			'aws',
			'jenkins',
			'sonar',
			'jest-test',
			'react-test',
			'tdd',
			'microservice',
		]),
	},
	{
		id: 'desjardins',
		start: 'Dec 2020',
		end: 'Jan 2022',
		logoClassname: 'bg-desjardins-white',
		url: 'https://desjardins.com',
		company: 'Desjardins',
		title: 'Software engineer',
		summary: CAREER.desjardins.summary,
		descriptions: CAREER.desjardins.descriptions,
		technologies: extract(['java', 'react', 'stencil', 'typescript', 'concourse', 'cf', 'sonar', 'tdd', 'rest', 'liferay']),
	},
	{
		id: 'bell',
		start: 'May 2019',
		end: 'May 2020',
		logoClassname: 'bg-bell-white',
		url: 'https://bell.ca',
		company: 'Bell',
		title: 'Software engineer',
		summary: CAREER.bell.summary,
		descriptions: CAREER.bell.descriptions,
		technologies: extract(['csharp', 'rest', 'ember', 'mysql', 'docker', 'html', 'css']),
	},
	{
		id: 'ubisoft',
		start: 'Jan 2018',
		end: 'May 2018',
		logoClassname: 'bg-ubisoft-white',
		url: 'https://www.ubisoft.com/en-ca/',
		company: 'Ubisoft',
		title: 'Software engineer (Intern)',
		summary: CAREER.ubisoft.summary,
		descriptions: CAREER.ubisoft.descriptions,
		technologies: extract(['typescript', 'polymer', 'html', 'css', 'jira']),
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
export const TechStack = [
	{
		title: 'Dev.title',
		icon: <FaCode size={20} className="text-accent" />,
		metaData: ['stack', 'authentication', 'docker', 'versionning'].map((s) => `Dev.${s}`),
	},
	{
		title: 'Soft.title',
		icon: <GiSkills size={20} className="text-accent" />,
		metaData: ['adaptability', 'communication', 'learning', 'problemSolving', 'resilience', 'teamwork'].map(
			(s) => `Soft.${s}`,
		),
	},
	{
		title: 'Cloud.title',
		icon: <FaCloud size={20} className="text-accent" />,
		metaData: ['tools', 'aws', 'google', 'experience', 'challenges'].map((s) => `Cloud.${s}`),
	},
	{
		title: 'Devops.title',
		icon: <IoIosInfinite size={20} className="text-accent" />,
		metaData: ['integration', 'microservices', 'automation', 'security', 'commits', 'scripts', 'containerize'].map(
			(s) => `Devops.${s}`,
		),
	},
]
export const PersonalProjects = [
	{
		name: 'Activie (Founder)',
		tag: 'pickside',
		type: 'SaaS',
		gitUrl: ACTIVIE_GIT_REPO,
		imgSrc: '/pickside.png',
		summary: PROJECTS.activie.summary,
		descriptions: PROJECTS.activie.descriptions,
		technologies: extract(['go', 'mysql', 'aws', 'react', 'redux', 'typescript', 'tailwind']),
	},
	{
		name: 'Rogue-like Game engine',
		type: 'Software',
		tag: 'ge',
		gitUrl: GAME_ENGINE_GIT_REPO,
		summary: PROJECTS.gameEngine.summary,
		descriptions: PROJECTS.gameEngine.descriptions,
		technologies: extract(['cpp', 'ecs']),
  },
  {
		name: '1brc',
		type: 'Software',
		tag: 'ge',
		gitUrl: ONEBRC_GIT_REPO,
		summary: PROJECTS.onebrc.summary,
		descriptions: PROJECTS.onebrc.descriptions,
		technologies: extract(['go', 'crc']),
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
