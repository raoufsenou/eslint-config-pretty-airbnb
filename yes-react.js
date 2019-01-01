module.exports = {
  extends: [
    './rules/base',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    strict: "error"
  }
};
