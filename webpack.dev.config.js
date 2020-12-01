const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");

module.exports = {
    ...baseConfig,
    mode: "development",
    entry: ["react-hot-loader/patch", "./src/index.tsx"],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "usage",
                                        corejs: 3,
                                        targets: {
                                            chrome: "58",
                                            ie: "8",
                                        },
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }],
            },
            {
                test: /\.less$/,
                use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "less-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title: "Development",
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        port: 9000,
    },
    resolve: {
        ...baseConfig.resolve,
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
};
