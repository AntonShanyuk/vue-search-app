<template>
    <div class="grid">
        <div class="typeahead"><typeahead></typeahead></div>
        <div class="image-preview"><image-preview></image-preview></div>
    </div>
</template>
<style lang="scss" scoped>
    .grid {
        box-sizing: border-box;
        display: grid;
        justify-items: center;
        grid-column-gap: 2%;
        grid-row-gap: 1%;
    }
    @media (max-width: 1023px) {
        .typeahead {
            margin-top: 30px;
            grid-row-start: 1;
            grid-row-end: 2;
        }
        .image-preview {
            margin-top: 30px;
            grid-row-start: 2;
            grid-row-end: 3;
        }
    }
    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: 48% 50%;
            grid-template-rows: 100%
        }
        .typeahead {
            grid-column-start: 1;
            grid-column-end: 2;
        }
        .image-preview {
            grid-column-start: 2;
            grid-column-end: 3;
        }
    }
</style>
<script lang="ts">
import ImagePreview from './image-preview.vue';
import Typeahead from './typeahead.vue';

export default {
  components: {
    Typeahead,
    ImagePreview,
  }
}
</script>


