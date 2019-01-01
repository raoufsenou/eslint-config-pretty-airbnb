module.exports = {
  extends: [
    './rules/base',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    strict: "error"
  }
};
