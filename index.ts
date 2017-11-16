import Vue from 'vue';

import AppGrid from './components/app-grid.vue';
import { store } from './store';

export const app = new Vue({
    el: 'app',
    template: '<app-grid></app-grid>',
    store,
    components: {
        AppGrid,
    },
});
