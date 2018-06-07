const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    module: {
        rules: [
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
    output: {
        path: path.resolve(__dirname, '../dist'),//default in webpack4
        filename: 'static/[name].[hash].js',
    },
    plugins: [
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

module.exports = config;
