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
    files: 'src/**/*.js',
    rules: {
      'no-console': 'warn'
    },
  },
  pluginJs.configs.recommended,
];
