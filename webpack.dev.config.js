const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = {
    ...baseConfig,
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        hot: true,
        open: true,
        port: 9009,
    },
    resolve: {
        ...baseConfig.resolve,
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
};
