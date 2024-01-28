# About This Project

This document is specific to this project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). (Read more about this app in the other, auto-generated README file.)

## Spinning Up A Quick Backend

At Step 16, this project starts using dummy content to replicate fetching blog posts from a database:

1. Create a directory & JSON file with the blog content.

2. In the project directory, run:

```bash
npx json-server --watch data/db.json --port 8000
```

This starts a server with endpoints to the blog data that you can query within your code.

### Endpoints & HTTP Request Methods

-   `/blogs`
    -   GET - Fetch all blogs
-   `/blogs/{id}`
    -   GET - Fetch a single blog
-   `/blogs`
    -   POST - Add a new blog
-   `/blogs/{id}`
    -   DELETE - Delete a blog

## Testing For Fetch Errors

Step 19 is all about error handling for network problems or URL/endpoint (resource) issues.

#### Network Error Testing

1. Disconnect from json-server: `ctrl+C`
2. Refresh the page. Any connection errors will be captured by the catch block and can be logged to the console.
3. Reconnect to json-server after testing:

```bash
npx json-server --watch data/db.json --port 8000
```

#### Resource Error Testing

1. In the fetch block, change the URL to something nonexistent, e.g. `"http://localhost:8000/blogs%%%%%"`.
2. Refresh the page. Anything other than a successful delivery of the desired resource from the server will throw an `Error("message")` to the catch block.
3. Reset the URL after testing, e.g. `http://localhost:8000/blogs`
