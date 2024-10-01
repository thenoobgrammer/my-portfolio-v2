import { MdArrowForwardIos } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Dropdown({ header, content, expandedDefault = false }) {
	const [open, setOpen] = useState(expandedDefault)

	const handleOpen = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-x-4">
				<motion.div
					animate={{
						opacity: 1,
						rotate: open ? [0, 90] : [90, 0],
					}}
					transition={{ ease: 'easeInOut', duration: 0.2 }}
				>
					<span className="link" onClick={handleOpen}>
						<MdArrowForwardIos size={25} />
					</span>
				</motion.div>
				{header}
			</div>
			{open && <div className="pl-11">{content}</div>}
		</div>
	)
}
