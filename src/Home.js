const Home = () => {
    const handleClick = (e) => {
        console.log("Hello world", e);
    };

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* Pass a reference to a function without invoking it */}
            <button onClick={handleClick}>Click Me</button>
            {/* Pass an argument using an anonymous function */}
            <button onClick={(e) => handleClickAgain("Superman", e)}>
                Click Me Again
            </button>
        </div>
    );
};

export default Home;
