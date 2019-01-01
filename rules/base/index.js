module.exports = {
  extends: [
		'./best-practices',
		'./errors',
		'./es6',
		'./imports',
		'./node',
		'./style',
		'./variables',
		'./strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};