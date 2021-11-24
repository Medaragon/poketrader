module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    quotes: ['warn', 'single'],
    semi: ['off'],
    'vue/multi-word-component-names': ['off']
  }
}
