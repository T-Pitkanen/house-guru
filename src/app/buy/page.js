'use client'

import Image from 'next/image';
import styles from './page.module.css';
import Properties from '@/components/properties/properties';
import Property from '@/components/property/property';
import Filter from '@/components/filter/filter';

const Buy = () => {
	return (
		<div className={styles.page}>
			<div className={styles.blogHeader}>
				{' '}
				<Filter/>
			</div>

			{/* <Properties></Properties> */}
		</div>
	);
};

export default Buy;
