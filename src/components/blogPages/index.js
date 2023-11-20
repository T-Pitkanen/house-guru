// src/components/BlogList.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogData } from "../../utils/fetchData";
import styles from "./index.module.css";
import Image from "next/image";

const BlogList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogData();
      setArticles(data);
    };

    fetchData();
  }, []);

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <div className={styles.blogWrapper}>
        <ul className={styles.blogCardWrapper}>
          {articles.map((article, index) => (
            <li className={styles.blogCard} key={index}>
              {article.image && (
                <Image
                  src={article.image}
                  alt={`Image for ${article.title}`}
                  width={300}
                  height={200}
                />
              )}
              <h2>{article.title}</h2>
              <p>{article.thumbText}</p>
              <Link href={`/blog/[id]`} as={`/blog/${index + 1}`}>
                <button>Read More</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
