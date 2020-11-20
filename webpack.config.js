const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = {
    ...baseConfig,
    entry: "./src/components/index.tsx",
    output: {
        libraryTarget: "commonjs",
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
        react: "react",
        antd: "antd",
        axios:"axios",
        "core-js": "core-js",
        "react-redux": "react-redux",
        "@reduxjs/toolkit": "@reduxjs/toolkit",
        "@ant-design/icons": "@ant-design/icons",
    },
};
