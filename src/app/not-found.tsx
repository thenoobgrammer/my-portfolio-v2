'use client'

import Error from 'next/error'

const NotFound = () => {
	return (
		<html lang="en">
			<body className="bg-primary">
				<Error statusCode={404} />
			</body>
		</html>
	)
}

export default NotFound
