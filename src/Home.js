// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

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

    const [name, setName] = useState("Superman");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    };

    // Add run dependency only if name changes
    useEffect(() => {
        console.log("Use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            {/* Props for blogs data & delete functionality used in BlogList component */}
            <BlogList
                blogs={blogs}
                title="All Blogs"
                handleDelete={handleDelete}
            />

            <button onClick={() => setName("Batman")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
};

export default Home;
