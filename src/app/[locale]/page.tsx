'use client'

import About from './_sections/about'
import Curriculum from './_sections/curriculum'
import DownloadCurriculum from 'src/components/DownloadCurriculum'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Index({ params }) {
	const t = useTranslations('')
	return (
		<main className="flex gap-x-4 h-[calc(100vh-64px)] justify-center mt-16 mx-auto max-w-screen-xl border-slate-950">
			<div className="flex flex-col w-1/2 borders px-4">
				{/* <header className="relative h-fit ml-2 mt-4">
					<div className="absolute rounded-full w-28 h-28 border left-[calc(50%+4rem)]">
						<Image src="" alt="" />
					</div>
					<div>
						<h4 className="text-indigo-800 font-bold">{t('Antoine Hakim')}</h4>
						<h6 className="text-indigo-600/80 font-bold">{t('Senior developer')}</h6>
						<p className="text-lg text-indigo-400/80">{t(`My objective`)}</p>
						<p className="text-md text-slate-600">
							{t(
								'I build intuitive and responsive websites tailored to your needs. My goal is give your platform the best experience a user visiting could have. Whether you are in need for a portofolio, a custom website or a mobile application, I will be serving to the best of my capacity and bring forth your ideas into a tangible reality, exactly as you picture it.',
							)}
						</p>
					</div>
				</header> */}
				<Curriculum />
			</div>
			<div className="w-1/2 ">
				<About />
			</div>
		</main>
	)
}
