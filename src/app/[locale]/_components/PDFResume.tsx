import { Address, Education, Email, LINKEDIN_URL, PersonalProjects, Phone, WorkExperiences, extract } from 'lib/data'
import {
	Document,
	Font,
	Link,
	PDFDownloadLink as PDFRendererDownloadLink,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer'

import Spinner from 'src/components/Spinner'
import dynamic from 'next/dynamic'

Font.clear()
Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
			fontWeight: 700,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf',
			fontWeight: 900,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
			fontWeight: 500,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
			fontWeight: 400,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
			fontWeight: 300,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf',
			fontWeight: 100,
		},
	],
})

const styles = StyleSheet.create({
	page: { padding: 40, textAlign: 'left', fontFamily: 'Roboto', fontSize: 8 },
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#0256ee',
		marginBottom: 6,
	},
	subtitle: { color: '#9c9c9c', textAlign: 'left', marginBottom: 6, maxWidth: '60%' },
	summary: { color: '#5f5f5f', textAlign: 'left', marginBottom: 8 },
	textLeft: { textAlign: 'left' },
	sectionTitle: { color: '#0256ee', fontSize: 12 },
	left: { width: '60%', marginRight: '10%' },
	right: { width: '30%' },
	row: { display: 'flex', flexDirection: 'row' },
	column: { display: 'flex', flexDirection: 'column' },
})

export default function PDFResume({ t }) {
	const RenderPortfolios = () => {
		const pv12 = PersonalProjects.find((x) => x.tag === 'pv12')

		return (
			<View key="portfolios" style={{ marginVertical: 6 }}>
				<View style={{ ...styles.row, alignItems: 'center', gap: 4, marginVertical: 6 }}>
					<Text>
						{t('Portfolios')} {'('}
						<Link src={pv12?.url1} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
							V1
						</Link>{' '}
						&{' '}
						<Link src={pv12?.url2} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
							V2
						</Link>
						{')'}
					</Text>
				</View>
				{pv12?.descriptions.map((desc, idx) => (
					<View
						key={idx}
						style={{
							...styles.row,
							gap: 4,
							marginVertical: 2,
						}}
					>
						<Text>•</Text>
						<Text style={{ color: '#5f5f5f' }}>{t(desc)}</Text>
					</View>
				))}
			</View>
		)
	}
	return (
		<Document pageLayout="oneColumn">
			<Page size="A4" style={{ ...styles.row, ...styles.page }}>
				<View style={styles.left}>
					<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0256ee' }}>{t('Antoine Hakim')}</Text>
					<Text
						style={{
							color: '#9c9c9c',
							textAlign: 'left',
							marginBottom: 6,
							maxWidth: '70%',
							fontSize: 14,
						}}
					>
						{t('Role')}
					</Text>
					<Text style={styles.summary}>{t('Summary')}</Text>
					{/* Work experience */}
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Relevant Experience')}</Text>
						<View style={styles.column}>
							{WorkExperiences.map(({ company, descriptions, url, start, end, title }, idx) => (
								<View key={idx} style={{ marginVertical: 6 }}>
									<View style={{ ...styles.row, alignItems: 'center', gap: 4, marginVertical: 6 }}>
										<Text>{t(title)},</Text>
										<Link src={url} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
											{company}
										</Link>
										<Text style={{ fontSize: 7, color: '#939393' }}>
											{start} - {end}
										</Text>
									</View>

									{descriptions.map((desc, innerIdx) => (
										<View
											key={innerIdx}
											style={{
												...styles.row,
												gap: 4,
												marginVertical: 2,
											}}
										>
											<Text>•</Text>
											<Text style={{ color: '#5f5f5f' }}>{t(desc)}</Text>
										</View>
									))}
								</View>
							))}
						</View>
					</View>
				</View>
				<View style={styles.right}>
					{/* Personal Info */}
					<View style={{ ...styles.column, color: '#9c9c9c' }}>
						<Text>{Address}</Text>
						<Link src="tel:+15149668481" style={{ textDecoration: 'none', color: '#9c9c9c', marginVertical: 2 }}>
							{Phone}
						</Link>
						<Link src={`mailto:${Email}`} style={{ textDecoration: 'none', color: '#9c9c9c', marginVertical: 2 }}>
							{Email}
						</Link>
						<Link src={LINKEDIN_URL} style={{ textDecoration: 'none', color: '#9c9c9c', marginVertical: 2 }}>
							LinkedIn
						</Link>
					</View>
					{/* Skills */}
					<View style={{ ...styles.column, marginVertical: 6 }}>
						<Text style={{ ...styles.sectionTitle, marginVertical: 5 }}>{t('Skills')}</Text>
						<View style={{ ...styles.column, marginVertical: 5, color: '#5f5f5f' }}>
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Frontend')}</Text>
							<Text>
								{extract(['react', 'tailwind', 'redux', 'jest', 'vite', 'typescript'])
									.map((e: any) => e.name)
									.join(', ')}
							</Text>
						</View>
						<View style={{ ...styles.column, marginVertical: 5, color: '#5f5f5f' }}>
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Backend')}</Text>
							<Text>
								{extract(['go', 'java', 'node', 'python', 'mysql'])
									.map((e: any) => e.name)
									.reverse()
									.join(', ')}
							</Text>
						</View>
						<View style={{ ...styles.column, marginVertical: 5, color: '#5f5f5f' }}>
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Cloud/DevOps')}</Text>
							<Text>
								{extract(['aws', 'docker', 'git-actions', 'jenkins'])
									.map((e: any) => e.name)
									.join(', ')}
							</Text>
						</View>
					</View>
					{/* Selected projects */}
					<View style={{ ...styles.column, marginVertical: 6 }}>
						<Text style={{ ...styles.sectionTitle, marginVertical: 5 }}>{t('Selected projects')}</Text>
						{PersonalProjects.filter((p) => ['pickside', 'pv1', 'pv2'].includes(p.tag)).map(
							({ name, summaryWithStack, url }, idx) => (
								<View key={idx} style={{ ...styles.column, marginBottom: 5, color: '#5f5f5f' }}>
									<Link
										src={url}
										style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000', marginBottom: 2 }}
									>
										{name}
									</Link>
									<Text>{t(summaryWithStack)}</Text>
								</View>
							),
						)}
					</View>
					{/* Education */}
					<View style={{ ...styles.column, marginVertical: 6 }}>
						<Text style={{ ...styles.sectionTitle, marginVertical: 5 }}>{t('Education')}</Text>
						{Education.map((e, idx) => (
							<View key={idx} style={{ ...styles.column, marginBottom: 5, color: '#5f5f5f' }}>
								<Text style={{ fontWeight: 'bold', marginBottom: 2 }}>{e.institution}</Text>
								<Text>{t(e.program)}</Text>
							</View>
						))}
					</View>
				</View>
			</Page>
			<Page size="A4" style={{ ...styles.row, ...styles.page }}>
				{/* Personal projects */}
				<View style={{ ...styles.left, ...styles.column }}>
					<Text style={styles.sectionTitle}>{t('Personal Projects')}</Text>
					<View style={styles.column}>
						{PersonalProjects.filter((x) => !['pv1', 'pv2', 'pv12'].includes(x.tag)).map(
							({ descriptions, url, name }, idx) => (
								<View key={idx} style={{ marginVertical: 6 }}>
									<View style={{ ...styles.row, alignItems: 'center', gap: 4, marginVertical: 6 }}>
										{url && (
											<Link src={url} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
												{name}
											</Link>
										)}
									</View>
									{descriptions.map((desc, innerIdx) => (
										<View
											key={innerIdx}
											style={{
												...styles.row,
												gap: 4,
												marginVertical: 2,
											}}
										>
											<Text>•</Text>
											<Text style={{ color: '#5f5f5f' }}>{t(desc)}</Text>
										</View>
									))}
								</View>
							),
						)}
						<RenderPortfolios />
					</View>
				</View>
			</Page>
		</Document>
	)
}

export const LoadedPDFLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink), {
	ssr: false,
	loading: () => <Spinner />,
})

export const PDFDownloadLink = ({ t, children }) => (
	<PDFRendererDownloadLink document={<PDFResume t={t} />} fileName={t('Resume')}>
		{children}
	</PDFRendererDownloadLink>
)
