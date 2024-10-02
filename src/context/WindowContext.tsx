import { FC, createContext, useEffect, useMemo, useState } from 'react'

import { BREAKPOINTS } from 'src/utils/constants'

export type DeviceType = 'small-mobile' | 'std-mobile' | 'tablet' | 'desktop'
export type OrientationType = 'portrait' | 'landscape'

export interface WindowContextProps {
	clientHeight: number
	clientWidth: number
	device: DeviceType
	orientation: OrientationType
}

const WindowContext = createContext<WindowContextProps>({
	clientHeight: 0,
	clientWidth: 0,
	device: 'desktop',
	orientation: 'landscape',
})

export const WindowProvider: FC<any> = ({ children }) => {
	const [clientHeight, setVh] = useState<number>(0)
	const [clientWidth, setVw] = useState<number>(0)

	const getVh = () =>
		typeof window !== 'undefined' ? Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) : 0
	const getVw = () =>
		typeof window !== 'undefined' ? Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) : 0

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setVh(getVh())
			setVw(getVw())

			const handleResize = () => {
				setVh(getVh())
				setVw(getVw())
			}

			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	const device = useMemo<DeviceType>(() => {
		const sm = Number(BREAKPOINTS.sm.replace('px', ''))
		const md = Number(BREAKPOINTS.md.replace('px', ''))
		const lg = Number(BREAKPOINTS.lg.replace('px', ''))
		if (clientWidth <= sm) return 'small-mobile'
		if (clientWidth <= md) return 'std-mobile'
		if (clientWidth > md && clientWidth < lg) return 'tablet'
		return 'desktop'
	}, [clientWidth])

	const orientation = useMemo<OrientationType>(
		() => (clientWidth > clientHeight ? 'landscape' : 'portrait'),
		[clientHeight, clientWidth],
	)

	return (
		<WindowContext.Provider value={{ clientHeight, clientWidth, device, orientation }}>
			{children}
		</WindowContext.Provider>
	)
}

export default WindowContext
