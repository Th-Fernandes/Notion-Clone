module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended"
  ],
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off',
    //disable the need to space between {}
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
  },
};
