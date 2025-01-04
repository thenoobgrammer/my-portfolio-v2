import { VscLoading } from 'react-icons/vsc'

export default function Spinner() {
	return (
		<div role="status" className="animate-spin">
			<VscLoading />
			<span className="sr-only">Loading...</span>
		</div>
	)
}
