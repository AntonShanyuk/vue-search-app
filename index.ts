import Vue from 'vue';
import Typeahead from './components/typeahead.vue';

const app = new Vue({
    el: 'app',
    template: '<typeahead></typeahead>',
    components: {
        Typeahead,
    },
});
