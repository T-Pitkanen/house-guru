'use client';

import React from 'react';
import { getPropertyById, getPropertiesByTitle } from '@/services/properties.service';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import GoBackButton from '@/components/goBack/goBack';

const PropertyPage = ({ params }) => {

	const router = useRouter();
	
	const { id } = params;

	console.log('id prop in PropertyPage component:', id);
	
	const [property, setProperties] = useState({});

	useEffect(() => {
		getPropertyById(id).then((data) => {
			console.log('data in PropertyPage component:', data);
		  if (data) {
			const propertyData = {
			  address: data.address,
			  description: data.description,
			  image: data.image,
			  price: data.price,
			  square_meters: data.square_meters,
			  type: data.type,
			  bathrooms: data.bathrooms,
			  bedrooms: data.bedrooms,
			};
			setProperties(propertyData);
		  } else {
			console.error(`No data returned for id: ${id}`);
		  }
		});
	  }, [id]);

	return (
		<div className={styles.postContainer}>
			{property.address ? (
				<div className={styles.postWrapper}>
					<div className={styles.headerWrapper}>
						<h1>{property.address}</h1>
					</div>
					<div className={styles.contentWrapper}>
						<div className={styles.content}>
							<div>{property.description}</div>
							<Image
								src={property.image}
								alt={property.address}
								width={300}
								height={300}
							/>{' '}
							{property.propertyData.map((data, index) => (
								<React.Fragment key={index}>
									<div className={styles.postTitle}>{data.address}</div>
									<div className={styles.contentOne}>{data.description}</div>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
			<GoBackButton className={styles.goBackButton} />
		</div>
	);
};

export default PropertyPage;

//OLD CODE HERE
// 'use client';

// import { getPostById, getPostByTitle } from '@/services/data.service';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import styles from './page.module.css';

// const PostPage = ({ params }) => {
// 	const { id } = params;

// 	console.log(params);

// 	const [post, setPost] = useState({});

// 	useEffect(() => {
// 		getPostById(id).then((data) => {
// 			console.log(data);
// 			setPost(data);
// 		});
// 	}, [id]);

// 	return (
// 		<div className={styles.postContainer}>
// 			{post.title ? (
// 				<>
// 					<div className={styles.postWrapper}>
// 						<div className={styles.headerWrapper}>
// 							{' '}
// 							<h1>{post.title}</h1>
// 						</div>
// 						<div className={styles.contentWrapper}>
// 							<div className={styles.content}>
// 								<div>{post.content}</div>
// 								<Image
// 									src={post.image}
// 									alt={post.title}
// 									width={300}
// 									height={300}
// 								/>
// 								<div className={styles.postTitle}>{post.title}</div>
// 								<div>{post.content_1}</div>
// 								<div className={styles.postTitle}>{post.title_2}</div>
// 								<div>{post.content_2}</div>
// 								<div className={styles.postTitle}>{post.title_3}</div>
// 								<div>{post.content_3}</div>
// 								<Image
// 									src={post.image}
// 									alt={post.title}
// 									width={300}
// 									height={300}
// 								/>
// 								<div className={styles.postTitle}>{post.title_4}</div>
// 								<div>{post.content_4}</div>
// 								<div className={styles.postTitle}>{post.title_5}</div>
// 								<div>{post.content_5}</div>
// 							</div>
// 						</div>
// 					</div>
// 				</>
// 			) : (
// 				<p>Loading...</p>
// 			)}
// 		</div>
// 	);
// };

// export default PostPage;
