import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    semi: 0,
    'vue/multi-word-component-names': 'off',
    '@stylistic/quote-props': 'as-needed',
    '@stylistic/brace-style': '1tbs',
    '@stylistic/arrow-parens': 'always',
  },
})
