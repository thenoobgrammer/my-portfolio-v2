import { FC, createContext, useCallback, useEffect, useMemo, useState } from 'react'

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
	const getVh = () => Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	const getVw = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

	const [clientHeight, setVh] = useState<number>(getVh())
	const [clientWidth, setVw] = useState<number>(getVw())

	const device = useMemo<DeviceType>(() => {
		const sm = Number(BREAKPOINTS.sm.replace('px', ''))
		const md = Number(BREAKPOINTS.md.replace('px', ''))
		const lg = Number(BREAKPOINTS.lg.replace('px', ''))
		if (clientWidth <= sm) {
			return 'small-mobile'
		} else if (clientWidth <= md) {
			return 'std-mobile'
		} else if (clientWidth > md && clientWidth < lg) {
			return 'tablet'
		} else {
			return 'desktop'
		}
	}, [clientWidth])

	const orientation = useMemo<OrientationType>(() => {
		if (clientWidth > clientHeight) {
			return 'landscape'
		}
		return 'portrait'
	}, [clientHeight, clientWidth])

	useEffect(() => {
		const handleResize = () => {
			setVh(getVh())
			setVw(getVw())
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [getVh, getVw])

	return (
		<WindowContext.Provider value={{ clientHeight, clientWidth, device, orientation }}>
			{children}
		</WindowContext.Provider>
	)
}

export default WindowContext
