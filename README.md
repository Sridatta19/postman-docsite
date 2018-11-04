# Admin Console Documentation

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Getting Started](#getting-started)
- [Updating to New Releases](#updating-to-new-cra-releases)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run prettier](#npm-run-prettier)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [Deployment](#deployment)

### Getting Started

There are multiple ways of installing Node (preferably with nvm & brew in macOS)

The current setup is compatible with **node 8.x.x & npm 5.x.x** (restriction imposed due to parcel bundler)

Check node & npm versions using the following commands. Ensure that they are compatible.
```
node -v && npm -v
```
If you have installed node via NVM, Set the default node version for all command windows
```
nvm alias default 8.9.4
```

Set the node npm version just for current shell lifetime
```
nvm use 8.9.4
```

If you want to set it for current shell only, you need to run this command every time you open a new command window.

- Install dependencies
```
npm install
```

## Folder Structure

After creation, your project probably look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  src/
    App.js
    leftMenu.js
    moduleDetail.js
    utils.js
  styles/
    index.css
    logo.png
  index.html
  index.js
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Export the postman collection to the docsite folder. Rename the file to ".js" extension and prepend the json structure with "window.collectionJSON = "
Then add this line in `index.html` at the appropriate position.
```
  <script src="AdminConsole-Team.postman_collection.js"></script>
```

Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles javascript in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run prettier`

It formats the code in an opinionated manner.<br>
You should have globally installed the prettier npm package using the command<br>
```
npm install --global prettier
```
Or the developers can also add a prettier plugin in their editor and modify the settings to suit the script.

Check the [prettier](https://github.com/prettier/prettier) repository for more information.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) syntax.
* Array.prototype.find.

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Deployment

`npm run build` creates a `dist` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`.
