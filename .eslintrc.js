module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    plugins: [
    ],
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
    ],

    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-trailing-spaces': 'warn',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 1 }],
        'no-unexpected-multiline': 'error',
        'no-multi-spaces': 'error',
        'no-useless-escape': 'off',
        'no-unused-vars': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        'space-before-function-paren': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'space-in-parens': ['error', 'always'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',

        'no-useless-constructor': 'off',
        'spaced-comment': 'off',
        'lines-between-class-members': 'off',
        eqeqeq: 'off',
        'new-cap': 'off',
    },
}
