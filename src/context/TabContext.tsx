import { ReactNode, cloneElement, createContext, useContext, useState } from 'react'

import Link from 'next/link'
import clsx from 'clsx'

const TabContext = createContext<{ activeTab: any; setActiveTab: any }>({
	activeTab: 0,
	setActiveTab: () => {},
})

export function Tabs({ children, defaultTab = 0 }) {
	const [activeTab, setActiveTab] = useState(defaultTab)

	return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}

export function Tab({ className, label, tabIndex }) {
	const { activeTab, setActiveTab } = useContext(TabContext)
	const active = activeTab === tabIndex

	return (
		<span
			className={clsx(
				'w-fit py-1 px-2 cursor-pointer bg-red transition-all',
				active ? 'text-accent-300 underline' : 'text-light/70',
				className,
			)}
			onClick={() => setActiveTab(tabIndex)}
		>
			{label}
		</span>
	)
}

export function TabPane({ children, tabIndex }) {
	const { activeTab } = useContext(TabContext)

	if (activeTab === tabIndex) {
		return <div className="">{children}</div>
	} else {
		return null
	}
}
