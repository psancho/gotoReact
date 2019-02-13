const webpack = require('webpack');
const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));
const port = args.port || 8080;

const config = {
    mode: 'development',
    entry: [
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'eslint-loader',
            },
           {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true,
                        }
                    }
                ]
            },
        ]
    },
    output: {
        filename: '[name].[hash].js',
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        host: 'localhost',
        port: port,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
};

module.exports = config;
