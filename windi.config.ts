import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      // custom the default background
      'bg-main': 'dark:(bg-cafe-800 text-cafe-100)',
    },
    theme: {
      colors: {
        cafe: {
          100: '#efdab9',
          200: '#827768',
          700: '#343233',
          800: '#272526',
          900: '#181818',
        }
      },
      extend: {
        // fonts can be replaced here, remember to update the web font links in `index.html`
        fontFamily: {
          sans: '"Rubik", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          mono: '"Fira Code", monospace',
        },
      },
    },
  }),
)
