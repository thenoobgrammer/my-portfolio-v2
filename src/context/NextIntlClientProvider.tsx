'use client'

import { NextIntlClientProvider } from 'next-intl'

import { ReactNode } from 'react'

type Props = {
	locale: string
	children: ReactNode
	now: Date
	timeZone: string
}

export default function NextIntlProvider({ locale, children, now, timeZone, ...rest }: Props) {
	return (
		<NextIntlClientProvider
			locale={locale}
			now={now}
			timeZone={timeZone}
			{...rest}
		>
			{children}
		</NextIntlClientProvider>
	)
}
