// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {/* Conditional Template: if the left of && == true, output the right (e.g. once data is fetched) */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {/* Props for blogs data used in BlogList component */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
