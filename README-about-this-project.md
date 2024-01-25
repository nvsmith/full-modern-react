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
