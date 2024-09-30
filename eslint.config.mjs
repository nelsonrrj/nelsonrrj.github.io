import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    semi: ['error', 'never'],
    'vue/attributes-order': ['error'],
    'vue/multi-word-component-names': ['off'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/operator-linebreak': ['error', 'after'],
  },
})
