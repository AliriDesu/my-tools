module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'plugin:vue/essential',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {},
}
