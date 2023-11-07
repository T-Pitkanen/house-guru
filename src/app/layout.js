import { Poppins } from 'next/font/google';
import HamburgerMenu from '../components/navi/navi';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<HamburgerMenu />
				{children}
			</body>
		</html>
	);
}
