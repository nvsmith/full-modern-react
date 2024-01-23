// useState hook: allows for a dynamic, reactive value
import { useState } from "react";
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

    return (
        <div className="home">
            {/* Props to make blogs data available to BlogList.js component */}
            <BlogList blogsProp={blogs} titleProp="All Blogs" />
        </div>
    );
};

export default Home;
