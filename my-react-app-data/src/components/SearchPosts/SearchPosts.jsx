import { useState, useEffect } from "react";

const SearchPosts = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching data posts:", error));
    },[query])

    return (
        <div>
            <h1>Lista de Posts</h1>
            <input type="text"
            placeholder="Buscar posts por título"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            />
            <ul>
                {posts.map((post)=>
                <li key={post.id}>
                    Title: {post.title} --- Post: {post.body}
                </li>
                )}
            </ul>
        </div>
    )
    
    
}

export default SearchPosts;
