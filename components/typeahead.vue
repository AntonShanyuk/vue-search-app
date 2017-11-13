<template>
  <div class="message">
      {{message}}
  </div>
</template>
<style lang="scss" scoped>
  .message {
    color: red;
  }
</style>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  data: () => ({
      message: 'Hello world'
  })
})
</script>

