import { createApp } from "vue";
import router from '@/src/router';
import App from '@/src/components/App.vue';

const app = createApp(App);

app
.use(router)
.mount('#app')