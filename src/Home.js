// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // [initial value, function to rerender component] = useState(arg)

    // set initial state to null until after posts are fetched from db
    const [blogs, setBlogs] = useState(null);
    // Set initial pending state message
    const [isPending, setIsPending] = useState(true);
    // Store errors for output to browser. Assume null on initial render.
    const [error, setError] = useState(null);

    // Fetch data only once (when component first renders by using empty [])
    useEffect(() => {
        // Timeout to view pending state during testing; remove for production
        setTimeout(() => {
            // nonexistent resource to test for error throws/catches
            fetch("http://localhost:8000/blogs%%%%%")
                .then((response) => {
                    // determine if server sends back the correct response
                    if (!response.ok) {
                        // output for URL/resource errors
                        throw Error(`Could not fetch data for that resource. Check that your URL/endpoint is correct.`);
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    // remove pending message
                    setIsPending(false);
                    // Log any network errors URL/resource errors
                    // console.log(err.message);
                    setError(err.message);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {/* Conditional Template: if the left of && = true, output the right (e.g. once data is fetched) */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {/* Props for blogs data used in BlogList component */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
