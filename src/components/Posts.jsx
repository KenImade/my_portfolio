import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import PageTitleContext from '../PageTitleContext';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [, setTitle] = useContext(PageTitleContext);

  useEffect(() => {
    // Fetch the posts metadata
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        // Sort the posts by date before setting them into state
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      })
      .catch(error => console.error("Couldn't load posts:", error));

    // Set the page title
    setTitle("Writeups");
  },);

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <Link to={`/posts/${post.slug}`} key={post.slug}>
            <PostCard post={post}/>
        </Link>
      ))}
    </main>
  );
};

export default Posts;