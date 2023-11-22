'use client';

import Image from 'next/image';
import styles from './page.module.css';
import ContactForm from '@/components/contact/contact';

const PostsPage = () => {
	return (
		<div className={styles.contactPage}>
			<ContactForm />
		</div>
	);
};

export default PostsPage;
