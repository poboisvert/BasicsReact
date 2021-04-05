### JSX Project

#### NPM vs NPX

- NPX is for newer version of Node and should use to execute.

- NPM to install and support all versions

#### JSX

- JSX is not HTML, but with Babel to be converted to ES6

- style={{ color: 'red' }} in JSX and style="color:#000" in ES6

> www.babeljs.io

VS Code - JSX

```
const App = () => {
 return (
     <h1>Hello World</h1>
 );
};
```

Converted - ES6

```
const App = () => {
 return /*#__PURE__*/React.createElement("h1", null, "Hello World");
};
```
