'use client'

import { TypeAnimation } from 'react-type-animation'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('Home')

	return (
		<section className="relative section-full">
			<div className="absolute w-full h-full z-0" />
			<div className="absolute w-full h-full z-10 text-lg">
				<div className="w-fit h-full m-auto">
					<h2 className="text-slate-400">{t('Hello, I am')}</h2>
					<TypeAnimation
						className="text-white"
						wrapper="h2"
						cursor={true}
						repeat={Infinity}
						sequence={[
							t('Web designer'),
							2000,
							t('Full stack dev'),
							2000,
							t('Content creator'),
							2000,
							t('Portfolio designer'),
							2000,
							t('Antoine Hakim'),
							2000,
						]}
						speed={50}
					/>
				</div>
			</div>
		</section>
	)
}
