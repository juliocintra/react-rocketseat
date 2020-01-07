const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // todos arquivos que terminam com .js
                exclude: /node_modules/, // quando lê um arquivo js dentro da node_modules ele já esta transpilado
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, // Pega o css no momento que a aplicação é montade e jogada dentro do index.html
                    { loader: 'css-loader' }, // Para que entenda a importação de outros arquivos dentro do CSS
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader' },
                ]
            }
            // Toda vez que encontra um arquivo javascript, css ele vai transpilar o código
        ]
    }
};