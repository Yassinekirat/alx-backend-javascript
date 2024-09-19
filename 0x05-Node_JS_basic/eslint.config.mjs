import pkg from '@eslint/js';
const { eslint } = pkg;
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,  // Add this to support Node.js globals like `module`
      },
    },
    rules: {
      // Add any custom rules here
    },
  },
];
