import { Address, Education, Email, LINKEDIN_URL, PersonalProjects, Phone, WorkExperiences, extract } from 'lib/data'
import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer/lib/react-pdf.browser.es'

Font.clear()
Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
			fontWeight: 'bold',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf',
			fontWeight: 'semibold',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
			fontWeight: 'medium',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
			fontWeight: 'regular',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
			fontWeight: 'light',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf',
			fontWeight: 'thin',
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
	textLeft: { textAlign: 'left' },
	sectionTitle: { color: '#0256ee', fontSize: 12 },
	left: { width: '60%', marginRight: '10%' },
	right: { width: '30%' },
	row: { display: 'flex', flexDirection: 'row' },
	column: { display: 'flex', flexDirection: 'column' },
})

export default function PDFResume({ t }) {
	return (
		<Document pageLayout="oneColumn">
			<Page size="A4" style={{ ...styles.row, ...styles.page }}>
				<View style={styles.left}>
					<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0256ee', marginBottom: 6 }}>
						{t('Antoine Hakim')}
					</Text>
					<Text
						style={{
							color: '#9c9c9c',
							textAlign: 'left',
							marginBottom: 6,
							maxWidth: '70%',
						}}
					>
						{t('Role')}
					</Text>
					{/* Work experience */}
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Relevant Experience')}</Text>
						<View style={styles.column}>
							{WorkExperiences.map(({ company, descriptions, url, start, end, title }, idx) => (
								<View key={idx} style={{ marginVertical: 6 }}>
									<View style={{ ...styles.row, alignItems: 'center', gap: 4, marginVertical: 6 }}>
										<Text>{t(title)},</Text>
										<Link
											src={url}
											target="_blank"
											style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}
										>
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
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Programming languages')}</Text>
							<Text>
								{extract(['java', 'go', 'node'])
									.map((e: any) => e.name)
									.join(', ')}
							</Text>
						</View>
						<View style={{ ...styles.column, marginVertical: 5, color: '#5f5f5f' }}>
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Libraries & Frameworks')}</Text>
							<Text>
								{extract([
									'react',
									'next',
									'tailwind',
									'redux',
									'ember',
									'stencil',
									'jest',
									'vite',
									'typescript',
									'react-query',
									'mui5',
								])
									.map((e: any) => e.name)
									.join(', ')}
							</Text>
						</View>
						<View style={{ ...styles.column, marginVertical: 5, color: '#5f5f5f' }}>
							<Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{t('Tools and platforms')}</Text>
							<Text>
								{extract(['git', 'ec2', 'jenkins', 's3', 'vercel', 'docker', 'bash', 'mysql'])
									.map((e: any) => e.name)
									.join(', ')}
							</Text>
						</View>
					</View>
					{/* Selected projects */}
					<View style={{ ...styles.column, marginVertical: 6 }}>
						<Text style={{ ...styles.sectionTitle, marginVertical: 5 }}>{t('Selected projects')}</Text>
						{PersonalProjects.filter((p) => ['pickside', 'pv1', 'pv2'].includes(p.tag)).map(
							({ name, summary, url }, idx) => (
								<View key={idx} style={{ ...styles.column, marginBottom: 5, color: '#5f5f5f' }}>
									<Link
										src={url}
										style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000', marginBottom: 2 }}
									>
										{name}
									</Link>
									<Text>{t(summary)}</Text>
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
					{/* Interests */}
					<View style={{ ...styles.column, marginVertical: 6 }}>
						<Text style={{ ...styles.sectionTitle, marginVertical: 5 }}>{t('Interests')}</Text>
						<Text>
							{['Soccer', 'Hiking', 'Climbing', 'Web development', 'Axe throwing'].map((i: any) => t(i)).join(', ')}
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	)
}
