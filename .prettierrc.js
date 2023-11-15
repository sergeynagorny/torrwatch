/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 120,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  endOfLine: 'lf',

  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@/pages/(.*)$',
    '^@/widgets/(.*)$',
    '^@/features/(.*)$',
    '^@/entities/(.*)$',
    '^@/shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
