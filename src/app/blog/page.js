import Image from 'next/image'
import styles from './page.module.css'
import Posts from '@/components/posts/posts'
import Post from '@/components/post/post'



const PostsPage = () => {



  return (
    <div className={styles.blog} >
 
      <h1>Blog</h1>
      <Posts></Posts>


    </div>
  )
}

export default PostsPage

