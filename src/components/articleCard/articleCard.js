import Image from 'next/image';
import styles from './articleCard.module.css';
import Link from 'next/link';

const articleData = [
	{
		title: 'Selling',
		content:
			'We can help you with downsizing, moving, or simply seeking for a change in the real estate market so you can continue with confidence and comfort.',
		button: 'Read More',
		image: '/selling.jpg',
		link: '/sell',
	},
	{
		title: 'Buying',
		content:
			'Every year, we assist hundreds of customers. With our extensive market knowledge, we can guide you through all stages of your home purchase.',
		button: 'Read More',
		image: '/buying.jpg',
		link: '/blog/6418576e26d8eda8bbe16728',
	},
];

const CardBuild = ({ title, content, button, image, link }) => {
	return (
		<div className={styles.cardContainer}>
			<h2>{title}</h2>
			<p>{content}</p>
			<Link href={link}> <button>{button}</button> </Link>
			

			<Image src={image} alt={title} width={300} height={300} />
		</div>
	);
};

const Card = () => {
	return (
		<div className={styles.cardWrapper}>
			{articleData.map((card, index) => (
				<CardBuild
					key={index}
					title={card.title}
					content={card.content}
					button={card.button}
					image={card.image}
					link={card.link}
				/>
			))}
		</div>
	);
};

export default Card;
