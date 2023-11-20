// pages/blog/[id].js
import fs from 'fs';
import path from 'path';

const BlogArticle = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <div>{article.content}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const blogPostsDirectory = path.join(process.cwd(), 'public/blog-posts');
  const files = fs.readdirSync(blogPostsDirectory);
  const paths = files.map((file) => ({
    params: {
      id: file.replace(/\.json$/, ''),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public/blog-posts', `${params.id}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const article = JSON.parse(fileContent);

  return {
    props: {
      article,
    },
  };
}

export default BlogArticle;
