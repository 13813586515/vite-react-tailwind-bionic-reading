/* eslint-env node */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  ignoreFiles: [
    './node_modules/**/*',
    './dist/**/*',
    './coverage/**/*',
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'screen', 'variants', 'responsive'],
      },
    ],
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'selector-pseudo-element-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'string-no-newline': null,
    'declaration-empty-line-before': null,
    'media-feature-range-notation': null,
    'font-family-name-quotes': null,
    'selector-max-universal': 1,
    'selector-class-pattern': [
      '^([a-z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case',
      },
    ],
  },
};
