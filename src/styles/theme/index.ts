import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'white',
        padding: 0,
        margin: 0,
        fontFamily:
          '-apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif',
        overflow: 'hidden',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },

  components: {},
})
