module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    'plugin:vue/vue3-recommended',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}