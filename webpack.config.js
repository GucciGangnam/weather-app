const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          // Rule for CSS files
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
          // Rule for image files
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                },
            },
            ],
        },
        ],
    },
    };

