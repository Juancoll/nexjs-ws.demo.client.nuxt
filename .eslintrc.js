module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4],
        indent: ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'no-console': process.env.NODE_ENV === 'production'
            ? 'error'
            : 'warn',
        'no-useless-constructor': 'off',
        eqeqeq: 'off',
        'node/no-deprecated-api': 'off',
        'require-await': 'off'
    }
}
