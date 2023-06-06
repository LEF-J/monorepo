module.exports = {
  env: {
    browser : true,
    es2021  : true,
    jest    : true,
    node    : true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files         : ['**/*.{ts,tsx}'],
      parserOptions : {
        tsconfigRootDir : __dirname,
        ecmaFeatures    : {
          jsx: true,
        },
        ecmaVersion : 12,
        sourceType  : 'module',

        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/await-thenable'       : 'error',
        '@typescript-eslint/no-floating-promises' : 'error',
        '@typescript-eslint/no-misused-promises'  : 'error',
      },
    },
    {
      files  : '*.json',
      parser : 'jsonc-eslint-parser',
      rules  : {
        'jsonc/sort-keys': 'error',
      },
      extends: ['plugin:jsonc/recommended-with-json'],
    },
  ],
  parser  : '@typescript-eslint/parser',
  plugins : [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'typescript-sort-keys',
  ],
  rules: {
    'simple-import-sort/exports'                        : 'error',
    'simple-import-sort/imports'                        : 'error',
    'react-hooks/rules-of-hooks'                        : 'error',
    'react-hooks/exhaustive-deps'                       : 'warn',
    'react/prop-types'                                  : 'off',
    'react/react-in-jsx-scope'                          : 'off', // para trabalhar com NextJS apenas
    '@typescript-eslint/explicit-module-boundary-types' : 'off',
    '@typescript-eslint/no-non-null-assertion'          : 'off',
  },
};
