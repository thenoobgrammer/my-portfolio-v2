'use client'

import {
	Address,
	Education,
	Email,
	Github,
	Languages,
	LinkedIn,
	PersonalProjects,
	Phone,
	SpokenLanguages,
	Website,
	WorkExperiences,
} from 'lib/data'
import {
	Document,
	Font,
	Link,
	PDFDownloadLink,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer/lib/react-pdf.browser.es'

import Spinner from 'src/components/Spinner'
import { useTranslations } from 'next-intl'

Font.register({
	family: 'Inter',
	src: 'https://fonts.googleapis.com/css?family=Inter',
})

const styles = StyleSheet.create({
	page: { padding: 40, textAlign: 'left' },
	title: {
		fontSize: 24,
		fontWeight: 'heavy',
		color: '#0256ee',
		marginBottom: 6,
	},
	subtitle: { color: '#9c9c9c', textAlign: 'left', marginBottom: 6, maxWidth: '50%', fontSize: 9 },
	textLeft: { textAlign: 'left' },
	sectionTitle: { color: '#0256ee', fontSize: 12 },
	left: { width: '70%', paddingRight: 10 },
	right: { width: '30%' },
	row: { display: 'flex', flexDirection: 'row' },
	column: { display: 'flex', flexDirection: 'column' },
})

export default function DownloadLink() {
	const t = useTranslations('Resume')

	const Doc = () => (
		<Document pageLayout="oneColumn">
			<Page size="A4" style={{ ...styles.row, ...styles.page }}>
				<View style={styles.left}>
					<Text style={{ fontSize: 24, fontWeight: 'heavy', color: '#0256ee', marginBottom: 6 }}>
						{t('Antoine Hakim')}
					</Text>
					<Text
						style={{
							color: '#9c9c9c',
							textAlign: 'left',
							marginBottom: 6,
							maxWidth: '40%',
							fontSize: 9,
						}}
					>
						{t('Role')}
					</Text>
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Relevant Experience')}</Text>
						<View style={styles.column}>
							{WorkExperiences.map(({ company, descriptions, url, start, end, title, technologies }, idx) => (
								<View key={idx} style={{ marginVertical: 6 }}>
									<View style={{ ...styles.row, alignItems: 'center', gap: 4, fontSize: 10 }}>
										<Text style={{ fontWeight: 'bold' }}>{title},</Text>
										<Link src={url} style={{ textDecoration: 'none', color: '#000' }}>
											{company}
										</Link>
										<Text style={{ fontSize: 7, color: '#dedede' }}>
											{start} - {end}
										</Text>
									</View>

									{descriptions.map((desc, innerIdx) => (
										<View
											key={innerIdx}
											style={{
												...styles.row,
												gap: 4,
												fontSize: 9,
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
					<View style={{ ...styles.column, fontSize: 8 }}>
						<Text>{Address}</Text>
						<Text>{Phone}</Text>
						<Text>{Email}</Text>
						<Link src={Website.url}>{Website.text}</Link>
					</View>
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Skills')}</Text>
						<Text style={{ fontSize: 10 }}>
							<Text></Text>
							<Text></Text>
						</Text>
						<Text style={{ fontSize: 10 }}>
							<Text></Text>
							<Text></Text>
						</Text>
						<Text style={{ fontSize: 10 }}>
							<Text></Text>
							<Text></Text>
						</Text>
					</View>
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Selected Projects')}</Text>
						<Text style={{ fontSize: 10 }}>
							<Link src=""></Link>
							<Link src=""></Link>
						</Text>
					</View>
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Education')}</Text>
						<Text>{t('Education')}</Text>
						<Text style={{ fontSize: 10 }}></Text>
					</View>
					<View style={styles.column}>
						<Text style={styles.sectionTitle}>{t('Interests')}</Text>
						<Text style={{ fontSize: 10 }}></Text>
					</View>
				</View>
			</Page>
		</Document>
	)

	return (
		<PDFDownloadLink
			className="ml-2 border-2 rounded-sm border-accent-300 p-2 text-accent-100 hover:bg-accent-300/30 hover:border-accent-300/50 hover:text-accent-50 transition-all"
			document={<Doc />}
			fileName="CV"
		>
			{({ loading }) => (loading ? <Spinner /> : t('Download'))}
		</PDFDownloadLink>
	)
}
