<template>
  <div>
    <img v-if="!selectedImage" src="https://i.imgur.com/2NhE4eY.jpg">
    <img v-if="selectedImage" :src="selectedImage.url">
  </div>
</template>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>

<script lang="ts">
import { store } from "../store";

export default {
  computed: {
    selectedImage() {
      return store.getters.selectedImage;
    }
  }
};
</script>

