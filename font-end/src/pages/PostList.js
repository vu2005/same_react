import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts") // Simulate fetching from backend API
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
