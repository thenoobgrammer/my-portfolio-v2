import NextLink from 'next/link'
import { cn } from 'src/utils/common'

const Link = (props) => {
	return (
		<NextLink className={cn(props.className)} href={props.href}>
			{props.children}
		</NextLink>
	)
}

export default Link
