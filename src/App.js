import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    {/* Content that will switch depending on the route */}
                    <Switch>
                        {/* The path after the URL */}
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
