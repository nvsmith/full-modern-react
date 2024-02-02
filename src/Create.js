import { useState } from "react";

// sfc
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Oracle");

    const handleSubmit = (e) => {
        // Prevent page refresh on submit
        e.preventDefault();

        const blog = { title, body, author };
        console.log(blog);
    };

    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Wonder Woman">Wonder Woman</option>
                    <option value="Oracle">Oracle</option>
                </select>

                <button>Add Blog</button>
                {/* Output entries to document */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
};

export default Create;
