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

4. Set up React, HTML web pack plugin

```
npm install react react-dom react-hot-loader
npm install --save-dev @hot-loader/react-dom
```
