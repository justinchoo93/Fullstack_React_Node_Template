Basic boilerplating and webpack configuration for React, Node, Express

1. Initialize npm and install webpack, webpack cli, babel/core, babel-loader, babel/preset-env, babel/preset-react.

- babel preset env for compiling modern JS to ES5
- babel preset react for compiling JSX to JS
- babel loader used for webpack to transpile modern JS to ES5

```
npm init
npm install --save-dev webpack webpack-cli
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```

2. Configure babel. Create a new file named **babel.config.json** or **.babelrc.json**.

- for project wide babel config, use babel.config.json (monorepo, compiling node_modules)
- for configurations that only apply to a single part of your project, use .babelrc.json

basic configuration (typescript if needed)

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react", (@babel/preset-typescript)]
}
```

3. Configure webpack. Create a new file named **webpack.config.js**.

- refer to the webpack.config.js in this repo.
- not configured for TypeScript
- need to install sass loader, css loader, style loader, sass

```
npm install sass-loader sass css-loader style-loader
```

- add following script to webpack for production mode

```
"build": "webpack --mode production",
```

4. Set up HTMLWebpackPlugin

- create public folder with index.html for html template
- import HTMLWebpackPlugin in Webpack config file and set up plugin
- This plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.

```
npm install --save-dev html-webpack-plugin
```

5. Set up basic React

- install react, react-dom, react-hot-loader

```
npm install react react-dom react-hot-loader
npm install --save-dev @hot-loader/react-dom
```

- add App component to index and attach to root

6. Set up Webpack Dev Server for development environment

```
npm install --save-dev webpack-dev-server concurrently
```

- dev server will allow you to take advantage of HMR in development mode
- contentBase tells webpack where to serve static files from
- needs a proxy to route request to a sepearte API backend dev server
- overlay will show a full-screen overlay in the browser when there are complier errors or warnings

- add the following script in package.json to run server and client dev concurrently. Please note that with the recent update to Webpack v5 and Webpack CLI v4, we need to use webpack serve in order to run webpack-dev-server

```
"dev": "concurrently \"nodemon ./server/server.js\" \"webpack serve --open --inline --color --hot --mode development\""
```

7. Set up server folder and file

- Create server folder and create server.js file inside
- install express, dotenv, and compression

```
npm install express dotenv compression
```

- dotenv will be used for .env file (for secret codes such as POSTGRES ID)
- compression will gzip compress response body to greatly reduce their size, hence increasing speed of a web app

- refer to server/server.js file for basic express server setup
- add following script to run server in package.json file

```
"start": "node server/server.js",
```
