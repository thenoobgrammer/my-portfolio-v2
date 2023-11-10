import clsx from 'clsx'

export default function FlexLayout({ className = '', children, vertical = false }) {
	return <div className={clsx('w-full flex', vertical && 'flex-col', className)}>{children}</div>
}
