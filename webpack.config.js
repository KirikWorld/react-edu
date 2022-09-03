module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['css-loader', 'style-loader'] },
            { test: /\.(js|jsx)$/, use:'babel-loader' }
        ]
    },
    plugins: [
        
    ],
    "scripts": {
        "build": "NODE_ENV='production' webpack",
        "start": "webpack-dev-server"
      }
}