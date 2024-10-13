import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, ...globals.node },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    files: ['src/**/*.js'],
    ignores: [
      '!node_modules/', // unignore `node_modules/` directory
      'node_modules/*', // ignore its content
    ],
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      indent: ['error', 2],
      quotes: ['error', 'single'],
    },
  },
  pluginJs.configs.recommended,
];
