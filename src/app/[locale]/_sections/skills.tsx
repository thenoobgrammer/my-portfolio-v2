import { FaCloud, FaCode } from 'react-icons/fa'

import { CgEditBlackPoint } from 'react-icons/cg'
import Dropdown from 'src/components/Dropdown'
import { GiSkills } from 'react-icons/gi'
import { IoIosInfinite } from 'react-icons/io'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'

export default function Skills() {
	const t = useTranslations('Skills')

	const Skills = useMemo(
		() => [
			{
				title: t('Soft.title'),
				icon: <GiSkills size={20} className="text-accent" />,
				metaData: ['adaptability', 'communication', 'learning', 'problemSolving', 'resilience', 'teamwork'].map((s) =>
					t(`Soft.${s}`),
				),
			},
			{
				title: t('Cloud.title'),
				icon: <FaCloud size={20} className="text-accent" />,
				metaData: ['tools', 'aws', 'google', 'experience', 'challenges'].map((s) => t(`Cloud.${s}`)),
			},
			{
				title: t('Dev.title'),
				icon: <FaCode size={20} className="text-accent" />,
				metaData: ['stack', 'docker', 'versionning'].map((s) => t(`Dev.${s}`)),
			},
			{
				title: t('Devops.title'),
				icon: <IoIosInfinite size={20} className="text-accent" />,
				metaData: ['integration', 'microservices', 'automation', 'security', 'commits', 'scripts', 'containerize'].map(
					(s) => t(`Devops.${s}`),
				),
			},
		],
		[t],
	)

	return (
		<div className="mx-auto max-w-screen-lg items-center">
			<div className="flex flex-col gap-y-4 text-light">
				{Skills.map((s, idx) => (
					<ul key={idx} className="block">
						<Dropdown
							header={
								<div className="flex items-center gap-x-4">
									<p className="text-lg font-semibold">{s.title}</p>
									{s.icon}
								</div>
							}
							content={s.metaData.map((s, idx) => (
								<li key={idx} className="text-md mb-2 inline-flex items-center gap-x-4">
									<CgEditBlackPoint className="text-highlight" size={15} />
									<span className="max-w-xs md:max-w-xl">{s}</span>
								</li>
							))}
						/>
					</ul>
				))}
			</div>
		</div>
	)
}
