module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: 'off',
    'comma-dangle': 'off',
    indent: ["off"],
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'eol-last': 'off',
    'vue/html-self-closing': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off'
  },
}
