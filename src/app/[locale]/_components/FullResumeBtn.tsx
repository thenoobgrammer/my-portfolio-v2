import { BiFullscreen } from 'react-icons/bi'
import { DialogDispatchContext } from 'src/context/DialogContext'
import IconButton from 'src/components/IconButton'
import Resume from './Resume'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

const FullResumeBtn = () => {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('Resume')

	return (
		<div className="flex items-center gap-x-3 text-light">
			<span>{t('Full resume')}</span>
			<IconButton
				className="text-accent-300"
				onClick={() =>
					dispatch({
						type: 'open',
						content: <Resume />,
						title: t('Resume'),
					})
				}
			>
				<BiFullscreen size={20} />
			</IconButton>
		</div>
	)
}

export default FullResumeBtn
