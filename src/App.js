import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const title = "Welcome to my new blog";
    const likes = 101;
    const link = "https://tecnate.dev";

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
                <p>{likes} readers like this.</p>
                <a href={link} target="blank">
                    Tecnate
                </a>
            </div>
        </div>
    );
}

export default App;
