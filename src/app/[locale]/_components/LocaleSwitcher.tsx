'use client'

import { FR, US } from 'country-flag-icons/react/3x2'

import { BiGlobe } from 'react-icons/bi'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import Menu from 'src/components/Menu'
import { cn } from 'src/utils/common'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function LocaleSwitcher() {
	const params = useParams()

	const [open, setOpen] = useState<boolean>(false)

	const Locales = [
		{
			value: 'en',
			description: 'English',
			icon: <US />,
		},
		{
			value: 'fr',
			description: 'Français',
			icon: <FR />,
		},
	]

	return (
		<div className="relative text-light">
			<IconButton className="space-x-2 text-lg" onClick={() => setOpen(true)}>
				<BiGlobe size={20} />
				<span className="capitalize">{params.locale}</span>
			</IconButton>
			<Menu open={open} onClose={() => setOpen(false)}>
				{Locales.map(({ value, description, icon }, idx) => (
					<Link
						key={idx}
						className={cn(
							'flex h-12 items-center gap-x-3 p-3 capitalize',
							params.locale === value
								? 'cursor-default bg-accent-200 text-dark'
								: 'hover:bg-accent/30 hover:text-accent-600',
						)}
						href={`/${value}`}
						locale={value}
					>
						{description}
						<span className="h-auto w-6">{icon}</span>
					</Link>
				))}
			</Menu>
		</div>
	)
}
