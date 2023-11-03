module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'sort-keys',
    'i18next',
  ],
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'i18next/no-literal-string': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
    'arrow-body-style': 'error',
    eqeqeq: ['error', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'no-extend-native': 'off',
    'import/newline-after-import': [
      'error',
      {
        count: 1,
        considerComments: true,
      },
    ],
    'no-console': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['yup'],
            message: 'Usage of yup should be encapsulated in validation.ts',
          },
        ],
      },
    ],
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
  },
  overrides: [
    {
      files: ['src/types/**/*', 'src/**/*.test.ts{,x}'],
      rules: {
        'i18next/no-literal-string': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
      },
    },
    {
      files: ['src/**/*stories.ts{,x}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*/utils/validation.ts'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
