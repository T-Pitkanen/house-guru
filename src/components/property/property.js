import Image from 'next/image';
import styles from './property.module.css';
import Link from 'next/link';

const Property = ({ property }) => {
	console.log('Rendering property', property);
	return (
		<div className={styles.propertyContainer}>
			<div className={styles.header}>
				<Image src={property.image} alt={property.address} width={300} height={300} />
			</div>

			<div className={styles.body}>
				<div>
					<div className={styles.info}>
						<div className={styles.address}>{property.address}</div>
						<div className={styles.description}>{property.description}</div>
						<Link href={`/buy/${property._id}`}>
							<button className={styles.button}>Read More</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Property;
