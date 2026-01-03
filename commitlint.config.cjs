module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /* ------------------------------
     * Commit message structure
     * ------------------------------ */
    'type-enum': [
      2,
      'always',
      [
        'feat',     // new feature
        'fix',      // bug fix
        'docs',     // documentation
        'style',    // formatting, no logic change
        'refactor', // code refactor
        'perf',     // performance improvement
        'test',     // tests
        'chore',    // tooling, config
        'ci',       // CI/CD
        'build',    // build system
        'revert',   // revert commit
      ],
    ],

    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],

    /* Optional */
    'scope-case': [2, 'always', 'kebab-case'],
  },
}
