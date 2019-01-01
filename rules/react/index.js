module.exports = {
  extends: [
    './react',
    './react-a11y',
  ].map(require.resolve),
	env:{
    jest: true,
		browser: true,
	},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};