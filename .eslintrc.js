module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    "react",
    "prettier",
    "jest",
    "react-hooks"
  ],
  rules: {
    "class-methods-use-this": "off",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
