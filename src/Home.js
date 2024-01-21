// useState hook: allows for a dynamic, reactive value
import { useState } from "react";

const Home = () => {
    // [initial value, function to rerender component]
    const [name, setName] = useState("Superman");
    const [age, setAge] = useState(33);

    const handleClick = () => {
        setName("Batman");
        setAge(32);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>President: {name}</p>
            <p>Age: {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Home;
