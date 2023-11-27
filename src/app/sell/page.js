'use client';

import Image from 'next/image';
import styles from './page.module.css';
import GoBackButton from '@/components/goBack/goBack';
import CardBrokers from '@/components/brokersCard/brokersCard';

const SellPage = () => {
	return (
		<div className={styles.sellPage}>
			<div className={styles.sellHeader}>
				<h1>Sale of the apartment and evaluation of the sale price</h1>
				<Image
					src="/selling.jpg" // Path to your image
					alt="selling page image"
					width={500} // Desired width
					height={300} // Desired height
				/>
				<p>
					We understand that choosing to sell yours is a big decision housing.{' '}
				</p>
				<p>
					We can help you with moving, downsizing or just looking for a change
					in the property market, so you can do it with ease and confidence.
				</p>
			</div>
			<div className={styles.sellBody}>
				<div className={styles.whyUs}>
					{' '}
					<h2>Why Choose Us?</h2>{' '}
					<ul>
						<li>
							<span>Expert advice:</span> Throughout the sales process, our
							knowledgeable estate agents offer you expert advice. We make sure
							you have all of them information you need to make wise decisions
							decisions.
						</li>
						<li>
							<span>Local market knowledge:</span> We ensure you get it best
							price for your property, as we have a thorough knowledge of the
							local property market.
						</li>
						<li>
							<span>Personal approach:</span> We handle your requirements and
							goals, as if they are unique. We adjust our tactics, then it suits
							your needs and preferences.
						</li>
						<li>
							<span>Marketing Excellence: </span> To present your property for a
							large and relevant audience uses we advanced marketing techniques.
							We can help with everything from online ads to expert photography.
						</li>
						<li>
							<span>Stress-free transactions:</span> We take care of the
							schedule and the paperwork to ensure that the sales process
							proceeds smoothly.
						</li>
					</ul>
				</div>

				<div className={styles.sellContact}>
					<div className={styles.contactHeader}>
						<h3>Request a justified price estimate for your home!</h3>
						<p>
							{' '}
							Our experienced brokers carry out a thorough review of your home
							and provide you with a professional assessment of what you can
							achieve from a home sale.
						</p>
						<p>
							Call our broker for a home visit when you want to discuss the sale
							and value of the apartment in more detail.
						</p>{' '}
						<span>A home visit does not bind you to anything.</span>
					</div>
					<form>
						<input type="text" name="name" placeholder="Name:" />
						<input type="tel" name="phone" placeholder="Phone:" />
						<input type="email" name="email" placeholder="Email:" />
						<textarea name="message" placeholder="Message..."></textarea>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className={styles.sellBottom}>
					<div>
						<h4>The road to a successful sale</h4>
						<p>
							There is more to selling your home than just disclose it. It is
							all about marketing your home correctly and realize its full
							potential. Your real estate goals can be achieved by start with
							our sales assessment.
						</p>
					</div>
					<div>
						<h4>Book your sales assessment today</h4>
						<p>
							Use our sales assessment to secure one successful home sale and
							the best price for your property.<br></br> <br></br> Contact us
							now to arrange your assessment and begin the path to one
							successful house sale.
						</p>
					</div>
				</div>
				<CardBrokers />
			</div>
			<GoBackButton className={styles.goBackButton} />
		</div>
	);
};

export default SellPage;
