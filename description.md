# How I make the project

I've been widely inspired with this article: [How to use Webpack with React: an in-depth tutorial](https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060)

For the lint material, I've read this one: [React Code Style with ESLint + Babel + Webpack](https://www.robinwieruch.de/react-eslint-webpack-babel/)

## Begining

```bash
# project setup
mkdir gotoReact
cd gotoReact
npm init -y
```

## Packages
Here is the commented list of dependencies.
Note: strikethrough line indicates that the lib is not installed, yet

### frontend
* `-S react`
* `-S react-dom`
* ~~`-S react-prop-types` *runtime type checking for react*~~
* `-S react-router-dom` *routing capabilities for react, similar UI-router from angualrJs world*
* ~~`-S semantic-ui-react` *multi theme, customisable CSS framework (more complicated than bootstrap)*~~

### dev

* `babel-core`
* `babel-eslint` *lints ES6 code*
* `babel-loader`
* `babel-preset-env` *detects witch ES version is used (2015, 2016 or 2017)*
* `babel-preset-react`: *handles JSX syntax*
* ~~`babel-preset-stage-1`~~
* `babel-preset-stage-2` *to use ES new features, like [object spread](https://github.com/tc39/proposal-object-rest-spread)*
* `chalk` *colorizes console output*
* `css-loader` *interprets `@import` & `url()` as `import`*
* `eslint`
* ~~`eslint-config-airbnb`~~
* `eslint-loader`
* ~~`eslint-plugin-import` *supports linting for ES6+*~~
* ~~`eslint-plugin-jsx-a11y` *static AST checker for accessibility rules on JSX elements.*~~
* `eslint-plugin-react`
* ~~`extract-text-webpack-plugin` *style in a separate CSS file (cannot be used with webpack 4, use `mini-css-extract-plugin` instead)*~~
* `html-webpack-plugin`
* `html-loader` *better than `raw-loader`*
* `mini-css-extract-plugin` *replaces `extract-text-webpack-plugin` and works with webpack 4*
* `minimist` *commandline parser*
* `postcss-loader` *adds vendor rules*
* ~~`react-delay-render` *avoids flashing waiter*~~
* `react-hot-loader` *apply change without reloading*
* ~~`react-imported-component` *code split*~~
* `rimraf` *deletes recursively a directory*
* `style-loader` *adds CSS to the DOM by injecting a `style` tag*
* ~~`webpack-bundle-analyzer` *visual analyser*~~
* `webpack` *module bundler + build tool*
* `webpack-cli`: *needed with webpack ^4.0.1*
* `webpack-merge` *merge 2 objects*
* `webpack-serve` *serve locally for dev purpose*

## Further reading

* [The Minimal React + Webpack 4 + Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* [Tutorial: How to set up React, webpack 4, and Babel (2018)](https://www.valentinog.com/blog/react-webpack-babel/)
* [How to Create a React app from scratch using Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)

## TODO

### Choose routing and state libs

* [React Redux Tutorial for Beginners: The Definitive Guide (2018)](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)
* [React — Better App Routing with UI-Router](https://medium.com/@Carmichaelize/react-better-app-routing-with-ui-router-f76b334eebd7)
* [Overview of UI-Router React and comparison with React Router](https://marcobotto.com/blog/overview-of-ui-router-react-and-comparison-with-react-router/)
* [8 things to learn in React before using Redux](https://www.robinwieruch.de/learn-react-before-using-redux/)
* [Redux or MobX: An attempt to dissolve the Confusion](https://www.robinwieruch.de/redux-mobx-confusion/)
* [How To Manage UI State With Redux](https://codeburst.io/how-to-manage-ui-state-with-redux-24deb6cf0d57)

### Choose a CSS framework

* [Evaluating CSS Frameworks](https://codeburst.io/evaluating-css-frameworks-bulma-vs-foundation-vs-milligram-vs-pure-vs-semantic-vs-uikit-503883bd25a3)
* [Framework Smackdown: Bootstrap vs Semantic-UI](https://hostpresto.com/blog/framework-smackdown-bootstrap-vs-semantic-ui/)
* [Twitter Bootstrap vs. Semantic UI](https://www.upwork.com/hiring/development/twitter-bootstrap-vs-semantic-ui/)

### Add XHR facilities

* [axios](https://www.npmjs.com/package/axios)
* [whatwg-fetch](https://github.com/github/fetch)
