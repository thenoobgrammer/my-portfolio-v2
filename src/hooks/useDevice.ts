import WindowContext, { DeviceType } from 'src/context/WindowContext'

import { useContext } from 'react'

const useDevice = (): [device: DeviceType, orientation: any] => {
	const { device, orientation } = useContext(WindowContext)
	return [device, orientation]
}

export default useDevice
