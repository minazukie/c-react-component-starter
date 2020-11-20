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
    },
};
