import { cn } from 'src/utils/common'

export default function Chip({ children, ...props }) {
	return <div className={cn('chip', props.className)}>{children}</div>
}
