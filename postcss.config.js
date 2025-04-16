import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import postcssImport from 'postcss-import'

export default {
  plugins: [
    postcssImport,
    tailwindcss,
    postcssNested,
    autoprefixer,
  ]
}