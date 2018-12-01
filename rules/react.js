module.exports = {
    extends:['plugin:react/recommended'],
    plugins: ['react'],
    rules: {
        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'warn',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-danger-with-children': 'warn',
        // Disabled because of undesirable warnings
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // 'react/no-deprecated': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'warn',
    },
}