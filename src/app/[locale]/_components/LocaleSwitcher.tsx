'use client'

import { BiArrowFromBottom, BiDownArrow, BiSolidDownArrow } from 'react-icons/bi'
import { useParams, usePathname, useRouter } from 'next/navigation'

import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function LocaleSwitcher({ children, defaultValue, label }) {
	const t = useTranslations('LocaleSwitcher')
	const pathname = usePathname()
	const params = useParams()
	const router = useRouter()
	console.log('pathname', pathname)
	console.log('params', params)
	console.log('router', router)

	function changeLocale() {
		if (params.locale === 'en') {
		}
	}
	//const otherLocale = locales?.find((cur) => cur !== locale)

	return (
		<div className="">
			<button className="text-white font-medium block hover:text-indigo-200/70 hover:scale-90 transition-all">
				<Link className="capitalize" href="/" locale={params.locale === 'en' ? 'fr' : 'en'}>
					{params.locale}
				</Link>
			</button>
		</div>
	)
}
