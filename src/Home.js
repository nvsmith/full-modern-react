// useState hook: allows for a dynamic, reactive value
import { useState } from "react";

const Home = () => {
    // [initial value, function to rerender component]
    const [blogs, setBlogs] = useState([
        {
            title: "Superman's Blog",
            body: "Lorem ipsum dolor",
            author: "Superman",
            id: 1,
        },
        {
            title: "Batman's Blog",
            body: "Ipsum ipsum dolor",
            author: "Batman",
            id: 2,
        },
        {
            title: "Wonder Woman's Blog",
            body: "Dolor ipsum dolor",
            author: "Wonder Woman",
            id: 3,
        },
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
