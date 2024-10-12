import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    files: ['src/**/*.js'],
    ignores: [
      '**/*.config.js',
      '!**/eslint.config.js',
      '**/*.config.mjs',
      '!**/eslint.config.mjs',
    ],
    rules: {},
  },
  pluginJs.configs.recommended,
];
