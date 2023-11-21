import Image from "next/image";
import styles from "./post.module.css";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <Image src={post.image} alt={post.title} width={300} height={300} />
      </div>

      <div className={styles.body}>
        <div>
          <div className={styles.title}>
            <Link href={`/blog/${post._id}`}>{post.title}</Link>
            <div className={styles.subtitle}>{post.subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
