const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const envs = {
    start: 'dev',
    build: 'pub',
};

const configCommon = require('./build-utils/webpack.common.js');
const configEnv = require(`./build-utils/webpack.${envs[TARGET]}.js`);

// function pattern is for future skills.
// a parameter can be passed through the scripts section in package.json:
// "start": "webpack-serve --env.prop1=value1 --env.prop2=value2"
// will pass:
// env: {prop1: "value1", prop2: "value2"}
module.exports = (/*env*/) => {
    const config = merge(configCommon, configEnv);
    return config;
}
