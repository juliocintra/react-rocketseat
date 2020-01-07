module.exports = {
    presets: [
        "@babel/preset-env", // Altera o que o navegador não entender (import, arrow functions)
        "@babel/preset-react", // Transforma o que o navegador não entende do React (JSX e funcionaliades especificas do react)
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};

// o Babel transpila códigos para que o navegador entenda de uma forma convencional