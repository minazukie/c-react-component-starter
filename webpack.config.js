const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = {
    ...baseConfig,
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
                use: ["ignore-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "less-loader"],
            },
        ],
    },
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
        ahooks: "ahooks",
        "core-js": "core-js",
        "react-redux": "react-redux",
        "@reduxjs/toolkit": "@reduxjs/toolkit",
        "@ant-design/icons": "@ant-design/icons",
    },
};
