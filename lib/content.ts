export const INTRO = {
	subtitle: 'Senior Engineer, based in Montreal',
	description: "I'm a fullstack developer with background experience in building complex platforms and designs.",
}

export const SECTION_TITLES = {
	career: 'Career timeline',
	projects: 'Projects',
	contact: 'Contact',
}

export const NAVBAR = {
	career: 'Career',
	projects: 'Projects',
	contact: 'Contact',
	viewResume: 'View resume',
	downloadResume: 'Download resume',
}

export const CONTACT = {
	description: 'If you are looking for someone to work with or even just to discuss, please feel free to contact me.',
	emailButton: 'Send me an email',
}

export const CAREER = {
	goto: {
		summary:
			"I focus on building and enhancing a SaaS business platform, ensuring it's reliable, user-friendly, and equipped with features that add real value.",
		descriptions: [
			'Owned the user management sections on the admin dashboard, enabled 95% of legacy clients to transition smoothly to the new platform',
			'Collaborated with product and UX teams to design flexible, role-based user flows, reducing onboarding-related support requests by 30% across all newly onboarded accounts',
			'Re-architected the privilege system, transitioning to an RBAC model, improving access reliability, and reducing privilege-related support incidents by 40%',
			'Developed billing administrator features, enabling client transitions and eliminating manual reconciliation work',
			'Refactored product settings into reusable, modular components, reducing code duplication across 20+ files, accelerating new feature delivery by 25%',
			'Mentored 2 junior devs, accelerating their onboarding by 50%',
		],
	},
	desjardins: {
		summary:
			'Worked on a secure messaging platform where users could share sensitive documents and messages. Learned a ton about security and building microservices, especially how to make solid REST APIs and pipelines.',
		descriptions: [
			'Built a secure file-sharing platform from scratch for financial advisors to request and receive confidential documents from clients, supporting advisors across 40+ branches',
			'Owned a security-focused microservice, implementing PKCE-based authentication and XSS defenses, enabling secure document submissions for 100+ advisors and clients weekly in a highly regulated environment',
			'Led the emergency response to Log4j vulnerability, updating the version within 48 hours to avoid potential security breaches',
			'Built and published a reusable component library, cutting boilerplate across 20+ teams and accelerating frontend development',
			'Implemented CI/CD pipelines with 80%+ test coverage, reducing deployment-related incidents by 50%',
		],
	},
	bell: {
		summary:
			'Helped build an internal dashboard (think JIRA-lite) that made team stand-ups way easier and saved them a ton of time. I also got to work on both the frontend and backend, which was a great learning experience.',
		descriptions: [
			'Built and owned the frontend for an internal swimlane board, replacing manual whiteboard planning for 50+ teams and reducing daily scheduling time by 15 minutes per team',
			'Built full-stack task management features, integrating frontend interactions (drag-and-drop, color-tagging, search) with backend CRUD endpoints for seamless task management',
			'Mentored teammates in EmberJS, improving team productivity and technical expertise',
			'Created an interactive onboarding guide, accelerating new user adoption and reducing onboarding time by half',
		],
	},
	ubisoft: {
		summary:
			'This was my first job as an intern, where I fell in love with frontend dev. I built widgets with PolymerJS (a Google library) and learned the ropes of component-based design.',
		descriptions: [
			'Built and deployed event-based communication channel for drag-and-drop iFrame widgets, enabling seamless cross-widget data exchange within the dashboard using PolymerJS and TypeScript',
			'Designed and implemented unit tests for iFrame widgets, focusing on event-handling edge cases, and collaborated with QA to design cross-widget integration tests ensuring reliable communication across all dashboard components',
		],
	},
}

export const PROJECTS = {
	activie: {
		summary:
			'A full-stack SaaS activity-booking platform built end-to-end — from database design to UI — with Go, React, and AWS.',
		descriptions: [
			'Architected and developed a full-stack SaaS activity-booking platform using Go, React, Tailwind, and MUI as the sole engineer',
			'Designed and built core microservices including auditing, OAuth, job scheduling, and payment integration via Stripe',
			'Managed all aspects of cloud infrastructure on AWS, utilizing RDS (PostgreSQL), EC2 (load-balanced), and S3 for scalability',
			'Implemented Goroutine-powered background task handling and prototyped observability via Grafana for production monitoring',
			'Managed the end-to-end product lifecycle from feature ideation and technical design through to deployment',
		],
	},
	gameEngine: {
		summary:
			'A 2D roguelike game engine built in C++ using ECS architecture, featuring SDL2 rendering, tilemap loading, AABB collision, enemy AI, and event-driven architecture.',
		descriptions: [
			'Building a 2D roguelike game engine in C++ using ECS architecture, with SDL2 rendering, tilemap loading, AABB collision, enemy AI, projectile systems, and event-driven architecture',
		],
  },
  onebrc: {
		summary:
			`A popular challenge that started in 2024 by the Java community. The goal was to explore modern Java's capabilities in aggregating data in the fastest time from a massive text file.`,
		descriptions: [
			'Attempted the challenge in Go instead to explore and leverage the language concurrency feature.',
		],
	},
}
