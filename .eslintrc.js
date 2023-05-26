module.exports = {
    extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
            },
        ],
    },
}
