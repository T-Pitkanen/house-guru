'use client'

import { getPostById, getPostByTitle } from '@/services/data.service'
import Image from 'next/image'
import {useState, useEffect} from 'react'

const PostPage = ({ params }) => {
  const { id } = params;

  console.log(params);

  const [post, setPost] = useState({});

  useEffect(() => {
    getPostById(id).then((data) => {
      console.log(data)
      setPost(data);
    });
  }, [id]);


  return (
    <div className={`page-wrapper`}>
      {post.title ? (
        <>
          <h1>{post.title}</h1>
          <Image src={post.image} alt={post.title} width={300} height={300} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage

