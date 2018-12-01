module.exports = {
    extends: [
        './index',
        'plugin:prettier/recommended',
    ].map(require.resolve),
};