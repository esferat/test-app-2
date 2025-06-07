import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettier from 'eslint-plugin-prettier';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tsEslint.configs.recommended, eslintPluginPrettierRecommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    ignores: ['eslint.config.ts'],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      quotes: [2, 'single', { avoidEscape: true }],
      'react-hooks/exhaustive-deps': 'off',
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
    },
  }
);
