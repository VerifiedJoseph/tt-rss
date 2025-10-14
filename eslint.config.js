import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,

  {
    files: ['js/**/*.js', 'plugins/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,

        // Dojo
        dojo: 'readonly',
        dijit: 'readonly'
      }
    },

    plugins: {
      '@stylistic/js': stylistic
    },

    rules: {
      'no-console': 'off',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'no-empty': ['error', { 'allowEmptyCatch': true }],

      // Stylistic rules (replacing those deprecated in ESLint)
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/eol-last': 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 2 }],
      '@stylistic/js/keyword-spacing': ['error', { 'after': true, 'before': true }],
      '@stylistic/js/block-spacing': ['error', 'always'],
      '@stylistic/js/computed-property-spacing': ['error', 'never'],
      '@stylistic/js/max-statements-per-line': ['warn', { 'max': 2 }]
    }
  }
];
