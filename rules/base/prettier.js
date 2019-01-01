module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
	rules: {
		"singleQuote": true,
		"prettier/prettier": ["error", { "singleQuote": true }]
	},
};
