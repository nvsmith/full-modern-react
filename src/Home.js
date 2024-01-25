// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // [initial value, function to rerender component]
    // set initial state to null until after posts are fetched from db
    const [blogs, setBlogs] = useState(null);

    // Fetch data only once (when component first renders by using empty [])
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {/* Props for blogs data & delete functionality used in BlogList component */}
            {/* && logic: don't output BlogList until 'blogs=true' (once data is fetched) */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
