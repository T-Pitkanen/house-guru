// src/app/BlogPage.js

'use client'

import BlogList from "@/components/blogPages";
import styles from "./page.module.css"

const BlogPage = () => {
  return (
    <div className={styles.page}>
      <BlogList />
    </div>
  );
};

export default BlogPage;
