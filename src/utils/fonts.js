import { Poppins, Playfair_Display } from 'next/font/google';

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
