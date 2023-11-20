// pages/api/blog-posts.js
import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  const blogPostsDirectory = path.join(process.cwd(), 'public/blog-posts');
  const files = await fs.readdir(blogPostsDirectory);

  const articles = await Promise.all(files.map(async (file) => {
    const filePath = path.join(blogPostsDirectory, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const article = JSON.parse(fileContent);
    return article;
  }));

  res.status(200).json(articles);
}
