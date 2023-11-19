'use client'

import { useEffect, useState } from 'react'

import { TypeAnimation } from 'react-type-animation'
import anime from 'animejs/lib/anime.es.js'
import { useTranslations } from 'next-intl'

export default function Introduction() {
	const t = useTranslations('Introduction')

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
		<div className="max-w-[960px] mx-auto space-y-3 whitespace-pre-wrap">
			<TypeAnimation
				sequence={[t('hi'), 500, t('intro'), () => setIsFirstCompleted(true)]}
				className="text-lg text-accent-300 font-medium"
				wrapper="p"
				speed={70}
				omitDeletionAnimation={true}
				cursor={false}
			/>
			{isFirstCompleted && (
				<TypeAnimation
					className="text-gray-300 font-medium"
					sequence={[900, t('name')]}
					wrapper="h3"
					speed={70}
					omitDeletionAnimation={true}
					cursor={false}
				/>
			)}
			<h4 id="title" className="text-light font-medium opacity-0">
				{t('jobTitle')}
			</h4>
			<p id="desc" className="text-md text-light/70 font-medium opacity-0">
				{t('summary')}
			</p>
		</div>
	)
}
