import { cn } from 'src/utils/common'

export default function Chip({ children, ...props }) {
	return (
		<div
			className={cn(
				'rounded-full bg-accent-50/10 text-accent-200 w-fit px-2 py-1 text-sm font-medium my-2 mx-1',
				props.className,
			)}
		>
			{children}
		</div>
	)
}
