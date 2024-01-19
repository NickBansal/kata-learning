module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es2021: true,
        jest: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    globals: {
        $: true,
        require: true,
        process: true,
        module: true,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'error',
        'no-console': 'off',
        'arrow-body-style': 'off',
        'no-plusplus': 0,
    },
}
