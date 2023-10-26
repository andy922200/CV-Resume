import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  theme: {
    colors: {
      lightBlue: '#3cadd4',
      lightGreen: '#add43c',
      lightPink: '#d43c61',
      lightGray: 'rgba(255, 255, 255, 0.5)',
      blackOnIcon: '#474747',
    },
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
})
