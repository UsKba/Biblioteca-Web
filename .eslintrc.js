module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',

    'prettier/@typescript-eslint',

    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'import-helpers', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',

    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',

    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/camelcase': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^styled-components/',
          '/^react/',
          'module',
          '/^~/hooks/',
          '/^~/services/',
          '/^~/store/',
          '/^~/utils/',
          '/^~/styles/',
          '/^~/components/',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
