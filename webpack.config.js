const path = require("path");

module.exports = {
    entry: './public/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./public/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
