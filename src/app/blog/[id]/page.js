'use client';

import React from 'react';
import { getPostById, getPostByTitle } from '@/services/data.service';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import GoBackButton from '@/components/goBack/goBack';

const PostPage = ({ params }) => {
	const { id } = params;

	const [post, setPost] = useState({});

	useEffect(() => {
		getPostById(id).then((data) => {
			const postData = {
				title: data.title,
				content: data.content,
				image: data.image,
				posts: [
					{ title: data.title_1, content: data.content_1 },
					{ title: data.title_2, content: data.content_2, image: data.image },
					{ title: data.title_3, content: data.content_3 },
					{ title: data.title_4, content: data.content_4 },
					{ title: data.title_5, content: data.content_5 },
				],
			};
			setPost(postData);
		});
	}, [id]);

	return (
		<div className={styles.postContainer}>
			{post.title ? (
				<div className={styles.postWrapper}>
					<div className={styles.headerWrapper}>
						<h1>{post.title}</h1>
						<Image
							src={post.image}
							alt={post.title}
							width={1000}
							height={1000}
						/>
					</div>
					<div className={styles.contentWrapper}>
						<div className={styles.content}>
							<div>{post.content}</div>
							{/* <Image
								src={post.image}
								alt={post.title}
								width={300}
								height={300}
							/>{' '} */}
							{post.posts.map((data, index) => (
								<React.Fragment key={index}>
									<div className={styles.postTitle}>{data.title}</div>
									<div className={styles.contentOne}>{data.content}</div>
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

export default PostPage;

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
