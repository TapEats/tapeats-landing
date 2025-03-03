module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      // Temporarily disable these rules during development
      '@typescript-eslint/no-unused-vars': 'warn', // Downgrade to warning
      'react-hooks/exhaustive-deps': 'warn', // Downgrade to warning
    },
    ignorePatterns: ['*.config.js', 'node_modules/', '.next/'],
  };