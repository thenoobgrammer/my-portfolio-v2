import { ReactNode } from 'react'

const RESUME_PATH = '/antoine_hakim_resume.pdf'

export function PDFDownloadLink({ children }: { children: ReactNode }) {
	return (
		<a href={RESUME_PATH} download>
			{children}
		</a>
	)
}

export function PDFViewLink({ children }: { children: ReactNode }) {
	return (
		<a href={RESUME_PATH} target="_blank" rel="noreferrer">
			{children}
		</a>
	)
}
