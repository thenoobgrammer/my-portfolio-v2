'use client'

import Error from 'next/error'

export default function NotFound() {
	return (
		<html lang="en">
			<body className="bg-primary">
				<Error statusCode={404} />
			</body>
		</html>
	)
}
