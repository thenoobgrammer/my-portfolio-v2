'use client'

import { useEffect, useRef, useState } from 'react'

import { TypeAnimation } from 'react-type-animation'
import anime from 'animejs/lib/anime.es.js'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'

export default function Introduction() {
	const ref = useRef<any>(null)
	const t = useTranslations('Introduction')

	const [introCompleted, setIntroCompleted] = useState(false)
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
			<div ref={ref} className="absolute w-screen h-screen opacity-5 overflow-hidden"></div>
			<div className="max-w-[960px] mx-auto space-y-3 whitespace-pre-wrap">
				<TypeAnimation
					sequence={[t('hi'), t('intro'), () => setIsFirstCompleted(true)]}
					className="text-lg text-accent-300 font-medium"
					wrapper="p"
					speed={50}
					omitDeletionAnimation={true}
					cursor={false}
				/>
				{isFirstCompleted && (
					<TypeAnimation
						className="text-gray-300 font-medium"
						sequence={[300, t('name')]}
						wrapper="h3"
						speed={50}
						omitDeletionAnimation={true}
						cursor={false}
					/>
				)}
				<h4 id="title" className="text-gray-300/70 font-medium opacity-0">
					{t('jobTitle')}
				</h4>
				<p id="desc" className="text-md text-gray-300/70 font-medium opacity-0">
					{t('summary')}
				</p>
			</div>
		</>
	)
}
