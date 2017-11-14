<template>
  <img v-if="selectedImage" :src="selectedImage.url">
</template>
<script lang="ts">
import { store } from '../store';

export default {
  computed: {
      selectedImage() {
        return store.getters.selectedImage;
      },
  }
};
</script>

