import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Scribble3D',
	description: 'Turn sketches into 3D models and compose interactive worlds',
	manifest: '/manifest.json',
	icons: [
		{
			rel: 'icon',
			url: '/icon.jpeg',
		},
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
