import { createVuetify } from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { aliases, md } from 'vuetify/iconsets/md'

export default createVuetify({
    theme: {
        defaultTheme: 'mytheme',
        themes: {
          mytheme: {
            dark: false,
            // options: {
            //   customProperties: false,
            // },
            // Set the desired font family and size
            typography: {
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
            },
            variables: {
              
            }
          },
        },
    },
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
            md,
        },
    },
})