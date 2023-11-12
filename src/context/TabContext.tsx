import { createContext, memo, useContext, useMemo, useState } from 'react'

import clsx from 'clsx'

const TabContext = createContext<{ activeTab: any; setActiveTab: any }>({
	activeTab: 0,
	setActiveTab: () => {},
})

export function Tabs({ children, defaultTab = 0, ...props }) {
	const [activeTab, setActiveTab] = useState(defaultTab)

	return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}

export const Tab = ({ id, label, tabIndex, ...props }) => {
	const { activeTab, setActiveTab } = useContext(TabContext)
	const active = activeTab === tabIndex

	return (
		<div
			id={id}
			tabIndex={tabIndex}
			className={clsx(
				'tab relative flex items-center text-lg py-1 px-2 cursor-pointer transition-transform z-10 hover:text-accent-300/60',
				active && 'active',
				props.className,
			)}
			onClick={() => setActiveTab(tabIndex)}
		>
			{label}
		</div>
	)
}

export function TabPane({ children, tabIndex }) {
	const { activeTab } = useContext(TabContext)

	if (activeTab === tabIndex) {
		return children
	} else {
		return null
	}
}
