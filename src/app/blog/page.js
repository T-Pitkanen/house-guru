import Image from 'next/image';
import styles from './page.module.css';
import Posts from '@/components/posts/posts';
import Post from '@/components/post/post';

const PostsPage = () => {
	return (
		<div className={styles.blog}>
			<div className={styles.blogHeader}>
				{' '}
				<h1>
					House Guru
					<br /> Blog
				</h1>
			</div>

			<Posts></Posts>
		</div>
	);
};

export default PostsPage;
