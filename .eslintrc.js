// prettier-ignore
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app/jest',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
}
