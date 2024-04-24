import { createContext, useContext, useState } from 'react'

import { cn } from 'src/utils/common'

const TabContext = createContext<{ activeTab: any; setActiveTab: any }>({
	activeTab: 0,
	setActiveTab: () => {},
})

export function Tabs({ children, defaultTab = 0 }) {
	const [activeTab, setActiveTab] = useState(defaultTab)

	return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}

export const Tab = ({ id, label, tabIndex, ...props }) => {
	const { activeTab, setActiveTab } = useContext(TabContext)
	const active = activeTab === tabIndex

	return (
		<button
			role="tab"
			id={id}
			tabIndex={tabIndex}
			className={cn('tab', active && 'active', props.className)}
			onClick={() => setActiveTab(tabIndex)}
		>
			{label}
		</button>
	)
}

export function TabPanel({ children, tabIndex, ...props }) {
	const { activeTab } = useContext(TabContext)

	if (activeTab === tabIndex) {
		return children
	} else {
		return null
	}
}
