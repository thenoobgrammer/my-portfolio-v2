'use client'

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

	return (
		<div className="relative">
			<IconButton className="space-x-2" onClick={() => setOpen(true)}>
				<BiGlobe />
				<span className="capitalize">{params.locale}</span>
			</IconButton>
			<Menu open={open} onClose={() => setOpen(false)}>
				<Link
					className={cn(
						'p-3 capitalize',
						params.locale === 'en' ? 'cursor-default bg-accent text-accent-100' : 'hover:text-accent-600',
					)}
					href="/en"
					locale="en"
				>
					English
				</Link>
				<Link
					className={cn(
						'p-3 capitalize',
						params.locale === 'fr' ? 'cursor-default bg-accent text-accent-100' : 'hover:text-accent-600',
					)}
					href="/fr"
					locale="fr"
				>
					Francais
				</Link>
			</Menu>
		</div>
	)
}
