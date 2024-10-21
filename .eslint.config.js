export default [
  {
    ignores: ['node_modules'], // Игнорируем node_modules
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Указываем расширения файлов
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react': require('eslint-plugin-react'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
      'import': require('eslint-plugin-import'),
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'next',
      'next/core-web-vitals',
    ],
    rules: {
      // Добавьте свои правила
    },
  },
];
