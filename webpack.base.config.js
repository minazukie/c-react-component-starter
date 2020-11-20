module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
    },
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
                test: /\.less$/,
                use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "less-loader"],
            },
        ],
    },
};
