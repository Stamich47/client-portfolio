import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const postsWithDates = data.posts.map((post, index) => ({
          date: new Date(
            Date.now() - index * 24 * 60 * 60 * 1000
          ).toLocaleDateString(),

          ...post,
        }));
        setPosts(postsWithDates);
      });
  }, []);

  console.log(posts);

  return (
    <div className="container my-5">
      <h1 className="text-center header-style mb-5">Visual Vibes</h1>
      <div className="row">
        {posts.map((post) => {
          return <BlogCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
