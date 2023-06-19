import { createVuetify } from 'vuetify';
import { aliases, md } from 'vuetify/iconsets/md'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/styles';
// import '@/src/settings.scss';

const vuetify = createVuetify({
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
      },
    },
});

export default vuetify;