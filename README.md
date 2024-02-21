# Full Modern React

## About This Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). (Read more about this app in the auto-generated [README-react-app.md](README-react-app.md) document.)

Node.js is required for local development.

## Quickstart After Cloning

To view the entire completed project for development locally, you'll need to open two terminal windows for your Node.js environment. Run the following in your project root:

1. `npx json-server --watch data/db.json --port 8000`
2. `npm run start`

After running the second command, your browser should automatically open the application, e.g. `http://localhost:3000/`.

Open up a third, separate terminal for any development purposes; keep the first two Node instances running in the background while you work.

## Getting Started with Setup

1. Install `node.js` if necessary.
2. Navigate to the directory where you want to create your project root.
3. Run the Create React App, replacing "project-name" with your own project:
    1. `npx create-react-app project-name`

For simple projects, you can delete the following:

1. src/App.test.js
2. src/reportWebVitals.js
    1. Open src/index.js to delete `import reportWebVitals from './reportWebVitals';` and `reportWebVitals();`.
3. src/setupTests.js

## Getting Started With Development (Step 1)

In your terminal, run `npm run start` to execute the script which starts React and allows you to view your project in the browser.

## Spinning Up A Quick Backend (Step 16)

At Step 16, this project starts using dummy content to simulate fetching blog posts from a database:

1. Create a directory & JSON file with the blog content: **data/db.json**

2. In the root project directory, run: `npx json-server --watch data/db.json --port 8000`

This starts a server which points to your database which you can query as a url/endpoint within your code. Changing the port is necessary because the server will default to port 3000, which is already in use by React.
<br>
Note: you may need to re-run `npm run start` after starting the json server.

### Endpoints & HTTP Request Methods

-   #### /blogs
    -   GET - Fetch all blogs
    -   POST - Add a new blog
-   #### /blogs/{id}
    -   GET - Fetch a single blog
    -   DELETE - Delete a blog

## Testing For Fetch Errors (Step 19)

Step 19 is all about error handling for network problems or URL/endpoint (resource) issues.

### Network Error Testing

1. Disconnect from json-server: `ctrl+C`
2. Refresh the page in your browser. Any connection errors will be captured by the catch block and can be logged to the console.
3. Reconnect to json-server after testing: `npx json-server --watch data/db.json --port 8000`

### Resource Error Testing

1. In the fetch block, change the URL to something nonexistent, e.g. `"http://localhost:8000/blogs%%%%%"`.
2. Refresh the page in your browser. Anything other than a successful delivery of the desired resource from the server will throw an _Error("message")_ to the catch block.
3. Reset the URL after testing, e.g. `http://localhost:8000/blogs`

## React Router (Step 21)

Step 21 requires installation of a new dependency, the React Router. In a new terminal, run `npm install react-router-dom@5`. Once installed, view the **package.json** file to see the _"react-router-dom..."_ listed under _dependencies_.
