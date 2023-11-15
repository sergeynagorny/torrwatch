module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:lodash/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'lodash'],
  rules: {
    '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    "lodash/prefer-constant": 'off',
    "lodash/prefer-lodash-method": "off",
    'lodash/import-scope': [2, "method"],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
