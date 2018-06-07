const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const envs = {
    start: 'dev',
    build: 'pub',
};

const configCommon = require('./build-utils/webpack.common.js');
const configEnv = require(`./build-utils/webpack.${envs[TARGET]}.js`);

module.exports = (env) => {
    console.log('env: ', env);
    const config = merge(configCommon, configEnv);
    console.log('config: ', config);
    return config;
}
