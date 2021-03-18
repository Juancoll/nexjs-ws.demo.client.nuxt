module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        eqeqeq: 'off',
        'no-console': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-useless-constructor': 'warn',
        'new-cap': 'off',
        'comma-dangle': ['error', 'only-multiline'],
    },
}
