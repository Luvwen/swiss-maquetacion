// eslint-disable-next-line no-undef
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        indent: 0,
        quotes: ['error', 'single'],
        semi: ['warn', 'always'],
        'react/jsx-sort-props': ['error'],
        'react/prop-types': 'off',
        'react-refresh/only-export-components': 'warn'
    }
};
