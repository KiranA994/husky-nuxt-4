// @ts-check

// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      // Possible Errors
      'no-console': 'warn', // Warn on console.log usage
      'no-debugger': 'warn', // Warn on debugger statements

      // Best Practices
      eqeqeq: ['error', 'always'], // Require === and !==
      'no-var': 'error', // Require let or const instead of var
      'prefer-const': 'error', // Prefer const for variables that are never reassigned

      // Vue specific (if using @nuxtjs/eslint-config)
      'vue/multi-word-component-names': 'off', // Allow single word component names
      'vue/no-multiple-template-root': 'off', // Allow multiple root elements in Vue 3
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
        },
      ],
    },
  },
)
