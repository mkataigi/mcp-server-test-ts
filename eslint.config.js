import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended, // Basic ESLint recommended rules
  ...tseslint.configs.recommended, // TypeScript specific recommended rules
  eslintPluginPrettierRecommended, // Integrates Prettier, disables conflicting rules
  {
    languageOptions: {
      globals: {
        node: true,
        es2022: true,
      },
      parserOptions: {
        project: true, // Use the project tsconfig.json
        tsconfigRootDir: import.meta.dirname, // Set the root directory for tsconfig resolution
      },
    },
    rules: {},
    ignores: [
      'dist/',
      'node_modules/',
      'eslint.config.js', // Ignore this config file itself
      'vite.config.ts', // Assuming vitest might add this later
      'pnpm-lock.yaml',
      '.prettierrc.json', // Ignore prettier config
      '.prettierignore', // Ignore prettier ignore file
    ],
  }
);
