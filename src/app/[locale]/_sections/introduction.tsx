import { useEffect, useState } from 'react'

import { TypeAnimation } from 'react-type-animation'
import anime from 'animejs/lib/anime.es.js'

export default function Introduction(props) {
	const [isFirstCompleted, setIsFirstCompleted] = useState(false)

	useEffect(() => {
		const anim = anime.timeline({
			loop: false,
			direction: 'alternate',
		})

		anim.add({
			targets: ['#title', '#desc'],
			opacity: 1,
			duration: 2000,
			delay: 3000,
		})
	}, [])

	return (
		<div className="w-[960px] mx-auto space-y-3">
			<TypeAnimation
				sequence={['Hi,', 500, 'Hi, my name is', () => setIsFirstCompleted(true)]}
				className="text-lg text-accent-300 font-medium"
				wrapper="p"
				speed={70}
				omitDeletionAnimation={true}
				cursor={false}
			/>
			{isFirstCompleted && (
				<TypeAnimation
					className="text-gray-300 font-medium"
					sequence={[900, 'Antoine Hakim.']}
					wrapper="h3"
					speed={70}
					omitDeletionAnimation={true}
					cursor={false}
				/>
			)}
			<h4 id="title" className="text-light font-medium opacity-0">
				Web developer, based in Montreal
			</h4>
			<p id="desc" className="text-md text-light/70 font-medium opacity-0">
				{`I'm a full-stack developer with a background experience in building full-fledged custom platform, tailed to
					customers needs. My past accomplishments holds in the companies I've worked for, but right now, I am looking
					and hoping to connect with people and work together to design amazing content. If you have a project and would
					love to bring it to reality, I am your man for the job.`}
			</p>
		</div>
	)
}
