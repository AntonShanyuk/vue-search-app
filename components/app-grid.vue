<template>
    <div class="grid">
        <div class="typeahead"><typeahead></typeahead></div>
        <div class="image-preview"><image-preview></image-preview></div>
    </div>
</template>
<style lang="scss" scoped>

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


