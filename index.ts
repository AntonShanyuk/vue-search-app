import Vue from 'vue';

import ImagePreview from './components/image-preview.vue';
import Typeahead from './components/typeahead.vue';
import { store } from './store';

export const app = new Vue({
    el: 'app',
    template: `
<div>
    <div><typeahead></typeahead></div>
    <div><image-preview></image-preview></div>
</div>
    `,
    store,
    components: {
        Typeahead,
        ImagePreview,
    },
});
