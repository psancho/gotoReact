const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const parseArgs = require('minimist');
const merge = require('deepmerge');
const path = require('path');

const args = parseArgs(process.argv.slice(2));
const port = args.port || 8080;
const TARGET = process.env.npm_lifecycle_event;

const configDev = {
    mode: 'development',
    entry: [
        './src/index.js',// default in webpack 4
        'react-hot-loader/patch',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
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
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
    devServer: {
        hot: true,
        host: 'localhost',
        port: port,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
};

const configProd = {
    mode: 'production',
    entry: [
        './src/index.js',// default in webpack 4
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true,
                            sourceMap: true,
                        }
                    },
                    {
                        // PostCSS will run before css-loader and will
                        // minify and autoprefix our CSS rules. We are also
                        // telling it to only use the last 2
                        // versions of the browsers when autoprefixing
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {
                                    autoprefixer: {
                                        browsers: 'last 2 versions',
                                    }
                                }
                            }
                        }
                    },
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//default in webpack4
        publicPath: '/',
        filename: 'static/[name].[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles/styles.[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            chunks: 'all',
        }),
    ],
    devtool: 'source-map',
};

const config = (TARGET === 'start') ? configDev : configProd;

module.exports = config;
