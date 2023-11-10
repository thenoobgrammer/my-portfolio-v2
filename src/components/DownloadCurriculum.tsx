import { BiCloudDownload } from 'react-icons/bi'

export default function DownloadCurriculum() {
	return (
		<div
			className="group/download flex items-center my-8 gap-x-2 whitespace-nowrap text-sm font-medium cursor-pointer w-fit transition-all hover:scale-90"
			onClick={() => {}}
		>
			<BiCloudDownload className="text-purple-500 group-hover/download:opacity-60" size={20} />
			<span className="group-hover/download:opacity-60">Full curriculum</span>
		</div>
	)
}
