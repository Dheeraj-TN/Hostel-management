module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    "parser:react-scripts/node_modules/babel-eslint",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
