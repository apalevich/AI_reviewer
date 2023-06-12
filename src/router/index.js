import { createRouter, createWebHistory } from "vue-router";
import SearchPage from '@/src/components/SearchPage.vue';
import OverviewPage from '@/src/components/OverviewPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: SearchPage
    },
    {
        path: '/:author/:repo',
        name: 'overview',
        component: OverviewPage,
    }
  ]  
})