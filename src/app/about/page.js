'use client';

import Image from 'next/image';
import styles from './page.module.css';

const brokers = [
	{
		name: 'John Mitchell',
		email: ' john.mitchell@houseguru.com',
		phone: '(555) 987-6543',
		education: "Certified Real Estate Specialist (CRES)",
		image: '/brokers/broker-man.jpg',
	},
	{
		name: 'Daniel Rivera',
		email: 'daniel.rivera@houseguru.com',
		phone: '(555) 987-6543',
		education: "Certified Real Estate Specialist (CRES)",
		image: '/brokers/broker-man2.jpg',
	},
	{
		name: 'Olivia Johnson',
		email: 'olivia.johnson@houseguru.com',
		phone: ' (555) 123-4567',
		education: "Certified Real Estate Specialist (CRES)",
		image: '/brokers/broker-woman.jpg',
	},
	// Add more broker objects here...
];

const Background = () => {
	return (
		<div className={styles.backgroundImage}>
			<Image
				src="/contact-bg.jpg"
				alt="background image for contact page"
				width={300}
				height={300}
			/>
		</div>
	);
};

const AboutPage = () => {
	return (
		<>
			<Background />
			<div className={styles.aboutPage}>
				<div className={styles.aboutWrapper}>
					<div className={styles.aboutHeader}>
						{' '}
						<h1>About Us</h1>
						<p>
							We are your partner in the search for your dream home or the sale
							of your valuable property.
						</p>
						<p>
							{' '}
							We understand that real estate is about more than mere
							transactions; it is about life-changing experiences.
						</p>{' '}
					</div>
					<div className={styles.brokers}>
						
						{brokers.map((broker, index) => (
							<div key={index} className={styles.brokersWrapper}>
								<Image
									src={broker.image}
									alt={broker.name}
									width={300}
									height={300}
								/>
								<div className={styles.brokerInfo}>
									<p>{broker.name}</p>
									<p>{broker.email}</p>
									<p>{broker.phone}</p>
									<p>{broker.education}</p>
								</div>
							</div>
						))}
					</div>
					{/* <div className={styles.aboutBody}>
						<h2>Our Mission</h2>
						<p>
							Our mission is to deliver a tailored and professional experience
							for each individual client. We believe that personal attention and
							dedication are the keys to success property deals. Whether you are
							a first-time buyer, an experienced investor or want to sell your
							property, our aim is to guide you safely through the process.
						</p>
						<h2>Our expertise</h2>
						<p>
							With years of experience in the real estate industry, we have
							built a strong reputation for competence and integrity. Our team
							consists of skilled real estate agents and experts dedicated to
							meeting your unique needs. We are specialists in navigating the
							local market and help you realize your housing dreams.
						</p>
						<h2>Local Knowledge</h2>
						<p>
							As local experts, we are deeply rooted in our community. We are
							familiar with the best neighbourhoods, schools and facilities, and
							we are happy to share our insights with you. Regardless of whether
							you are searching to buy or sell, you can trust us to guide you
							with honesty and professionalism.
						</p>
					</div>  */}
				</div>
			</div>
		</>
	);
};

export default AboutPage;
