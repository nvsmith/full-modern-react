import "./App.css";

function App() {
    const title = "Welcome to my new blog";
    const likes = 101;
    const link = "https://tecnate.dev";

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>{likes} readers like this.</p>
                <a href={link} target="blank">
                    Tecnate
                </a>
            </div>
        </div>
    );
}

export default App;
