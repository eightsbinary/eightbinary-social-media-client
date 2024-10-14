import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  {
    // extends: ['plugin:cypress/recommended', 'plugin:mocha/recommended'],
    files: ['src/**/*.js'],
    ignores: [
      '!node_modules/', // unignore `node_modules/` directory
      'node_modules/*', // ignore its content
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: pluginCypress,
    rules: {
      ...pluginCypress.configs.recommended.rules,
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-before': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-debug': 'error',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      indent: ['error', 2],
      quotes: ['error', 'single'],
    },
  },
  pluginCypress.configs.globals,
  pluginJs.configs.recommended,
];
