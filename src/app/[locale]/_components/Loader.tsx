'use client'

import { useCallback, useEffect, useRef } from 'react'

import Logo from 'src/components/svgs/Logo'
import PropTypes from 'prop-types'
import anime from 'animejs'
import { cn } from 'src/utils/common'

const Loader = ({ finishLoading }) => {
	const mounted = useRef<any>(null)

	const animate = useCallback(() => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		})

		loader
			.add({
				targets: '.wrapper',
				opacity: 1,
				delay: 200,
				duration: 100,
				easing: 'easeInOutQuart',
			})
			.add({
				targets: '#logo rect',
				delay: 300,
				duration: 1000,
				easing: 'easeInOutQuart',
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: '#logo #A path',
				duration: 1000,
				easing: 'easeInOutQuart',
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: '#logo',
				delay: 500,
				duration: 1000,
				opacity: 0,
				scale: 0.1,
				easing: 'easeInOutQuart',
			})
			.add({
				targets: '.wrapper',
				duration: 1000,
				opacity: 0,
				easing: 'easeInOutQuart',
			})
	}, [finishLoading])

	useEffect(() => {
		mounted.current = true

		return () => {
			mounted.current = false
		}
	}, [])

	useEffect(() => {
		if (mounted.current) {
			animate()
		}
	}, [animate, mounted])

	return (
		<div className={cn('wrapper flex items-center text-accent w-16 h-16 opacity-0')}>
			<Logo />
		</div>
	)
}

Loader.propTypes = {
	finishLoading: PropTypes.func.isRequired,
}

export default Loader
