module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Añade esta línea para reconocer el entorno de Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // Tus reglas personalizadas
  },
};