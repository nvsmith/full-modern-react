// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // [initial value, function to rerender component]
    // set initial state to null until after posts are fetched from db
    const [blogs, setBlogs] = useState(null);

    // Set initial pending state message
    const [isPending, setIsPending] = useState(true);

    // Fetch data only once (when component first renders by using empty [])
    useEffect(() => {
        // Timeout to view pending state during testing; remove for production
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {/* Props for blogs data & delete functionality used in BlogList component */}
            {/* Conditional Template: if the left of && = true, output the right (e.g. once data is fetched) */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
