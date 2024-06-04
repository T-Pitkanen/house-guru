"use client";
import { getPostData, getPostDataMock } from "@/services/data.service";
import Post from "../post/post";
import { useState, useEffect } from "react";
import styles from "./posts.module.css";

const Posts = ({recommended}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const getData = async () => {

      const data = await getPostDataMock();

      let filteredData = recommended ? data.filter( (post) => post.recommended === true ) : data;

      setPosts(filteredData);

    } 

    getData();


  }, [recommended])

  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return <Post key={post._id} post={post}></Post>;
      })}
    </div>
  );
};

export default Posts;
