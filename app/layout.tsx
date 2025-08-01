import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Shashank Srivastava - DevOps/DevSecOps Architect',
	description:
		'Welcome to my portfolio! I am a passionate DevOps Architect and Engineering Leader specializing in building scalable architectures, robust APIs, and automation solutions. With deep expertise in cloud infrastructure and Docker/Kubernetes/Linux, I create efficient and reliable solutions that serve millions of users.',
	keywords: [
		'DevOps Architect',
		'Engineering Leader',
		'System Architecture',
		'API Development',
		'Docker',
		'Kubernetes',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Shashank Srivastava',
		'Node.js',
		'Python',
		'Blockchain Systems',
		'Artifical Intelligence',
		'Machine Learning',
		'System Design',
		'Cloud Architecture',
	],
	authors: [{ name: 'Shashank Srivastava' }],
	creator: 'Shashank Srivastava',
	openGraph: {
		title: 'Shashank Srivastava - DevOps Architect Portfolio',
		description: 'Seasoned DevOps/DevSecOps Architect crafting scalable and efficient server architectures. Explore my projects and technical expertise here.',
		url: 'https://shashank-srivastava.vercel.app',
		siteName: 'Shashank Srivastava - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Shashank Srivastava - DevOps Architect Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shashank Srivastava - DevOps Architect',
		description: 'Passionate DevOps Architect crafting scalable and efficient server architectures. Explore my projects and technical expertise here.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
