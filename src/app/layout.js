import { Poppins } from 'next/font/google';
import HamburgerMenu from '../components/navi/navi';
import BigMenu from '@/components/naviBig/naviBig';
import Footer from '@/components/footer/footer';
import Navigation from '@/components/naviBoth/naviBoth';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
