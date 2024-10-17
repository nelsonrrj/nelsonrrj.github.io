import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'brackets',
      },
    ],
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'never'],
    'vue/attributes-order': ['error'],
    'vue/multi-word-component-names': ['off'],
  },
})
