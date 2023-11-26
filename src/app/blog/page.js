import Image from "next/image";
import styles from "./page.module.css";
import Posts from "@/components/posts/posts";
import Post from "@/components/post/post";

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

const PostsPage = () => {
  return (
    <div className={styles.blog}>
      <Background />
      <Posts></Posts>
    </div>
  );
};

export default PostsPage;
