import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from '@/src/components/App.vue';
import router from '@/src/router';
import vuetify from '@/vuetify.config.js';

createApp(App)
.use(createPinia())
.use(router)
.use(vuetify)
.mount('#app')