'use client'

import { useEffect, useRef, useState } from 'react'

import { TypeAnimation } from 'react-type-animation'
import anime from 'animejs/lib/anime.es.js'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'

export default function Introduction() {
	const ref = useRef<any>(null)
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
			delay: 1800,
		})
	}, [])

	return (
		<>
			<div ref={ref} className="absolute h-screen w-screen overflow-hidden opacity-5"></div>
			<div className="mx-auto max-w-[960px] space-y-3 whitespace-pre-wrap px-10 md:px-0">
				<TypeAnimation
					sequence={[t('hi'), t('intro'), () => setIsFirstCompleted(true)]}
					className="text-lg font-medium text-accent-300"
					wrapper="p"
					speed={50}
					omitDeletionAnimation={true}
					cursor={false}
				/>
				{isFirstCompleted && (
					<TypeAnimation
						className="font-medium text-gray-300"
						sequence={[300, t('name')]}
						wrapper="h3"
						speed={50}
						omitDeletionAnimation={true}
						cursor={false}
					/>
				)}
				<h4 id="title" className="font-medium text-gray-300/70 opacity-0">
					{t('jobTitle')}
				</h4>
				<p id="desc" className="text-md font-medium text-gray-300/70 opacity-0">
					{t('summary')}
				</p>
			</div>
		</>
	)
}
