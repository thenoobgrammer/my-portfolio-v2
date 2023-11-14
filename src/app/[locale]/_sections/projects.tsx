import { PersonalProjects } from 'lib/data'

export default function Projects(props) {
	return (
		<>
			<div className="w-3/4 mx-auto border-t border-light/70" />
			<div className="relative max-w-screen-lg min-h-[400px] items-center mx-auto px-5 py-10 space-y-3">
				<h4 className="text-light/90 font-medium leading-tight tracking-tight capitalize mb-5">Projects</h4>
				{PersonalProjects.map((project, idx) => (
					<div key={idx} className="w-[600px] h-[400px] border-2 rounded-md">
						{project.name}
					</div>
				))}
			</div>
		</>
	)
}
