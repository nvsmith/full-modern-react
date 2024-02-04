import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const deleteBlog = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
        }).then(() => {
            // Send user back to Home Route
            history.push("/");
        });
    };

    return (
        <div className="blog-details">
            {/* Conditional Template: if the left of && == true, output the right (e.g. once data is fetched) */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteBlog}>Delete This Blog</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
