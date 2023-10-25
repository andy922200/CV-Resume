module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  rules: {
    'eslint-disable-next-line': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/multi-word-component-names': 'off',
  },
}
