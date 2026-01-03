# Nuxt 4 App with Husky & Commitlint

This project is a **Nuxt 4** application configured with **Husky**,
**lint-staged**, **ESLint**, **Prettier**, and **Commitlint** to enforce
code quality and consistent commit messages.

------------------------------------------------------------------------

## 🚀 Tech Stack

-   Nuxt 4
-   Vue 3
-   ESLint
-   Prettier
-   Husky (v9)
-   lint-staged
-   Commitlint (Conventional Commits)

------------------------------------------------------------------------

## 📦 Installation

``` bash
npm install
```

------------------------------------------------------------------------

## 🧑‍💻 Development

``` bash
npm run dev
```

Build for production:

``` bash
npm run build
```

Preview production build:

``` bash
npm run preview
```

------------------------------------------------------------------------

## 🪝 Git Hooks (Husky)

This project uses **Husky** to run checks before committing code.

### Enabled Hooks

-   **pre-commit**
    -   Runs `lint-staged`
    -   Auto-fixes lint and formatting issues on staged files
-   **commit-msg**
    -   Enforces commit message format using Commitlint

> ⚠️ Do NOT delete or gitignore the `.husky/` folder

------------------------------------------------------------------------

## 🧹 lint-staged Configuration

Only staged files are checked for better performance.

``` json
{
  "*.{js,ts,vue}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,css,scss}": [
    "prettier --write"
  ]
}
```

------------------------------------------------------------------------

## 📝 Commit Message Rules

This project follows **Conventional Commits**.

### ✅ Valid commit messages

    feat: add login page
    fix(auth): resolve token issue
    docs: update README
    refactor(ui): clean dashboard layout
    chore: update dependencies

### ❌ Invalid commit messages

    added login
    fix bug
    login page updated

### Commit format

    <type>(optional-scope): <short description>

### Allowed types

-   feat -- New feature
-   fix -- Bug fix
-   docs -- Documentation
-   style -- Formatting only
-   refactor -- Code refactor
-   perf -- Performance improvement
-   test -- Tests
-   chore -- Tooling / config
-   ci -- CI/CD changes
-   build -- Build system changes
-   revert -- Revert commit

------------------------------------------------------------------------
