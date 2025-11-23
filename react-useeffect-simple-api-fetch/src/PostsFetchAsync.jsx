import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);


     if (loading) 
        return <p>Loading...</p>;
    

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}
