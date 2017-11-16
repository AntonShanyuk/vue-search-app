<template>
  <div class="container">
      <input type="text" @input="change" @keyup="keyUp" placeholder="Type something, eg 'cat'">
      <ul v-if="items.length">
        <li 
        v-for="(item, index) in items" 
        v-bind:key="index" 
        v-bind:class="{ selected: index === selectedIndex }"
        @click="itemClick(index)"
        >
          {{ item.text }}
        </li>
      </ul>
  </div>
</template>
<style lang="scss" scoped>
input {
  font-size: 20px;
  margin-top: 30px;
  padding: 5px;
}
input, ul {
  margin-left: 30px;
  margin-right: 30px;
  width: 400px;
}
ul {
  margin-top: 0;
  margin-bottom: 0;
  border-width: 0 1px 1px 1px;
  border-color: gray;
  border-style: solid;
  padding: 6px;
}
li {
  list-style: none;
}
li.selected {
  font-weight: bold;
}
</style>

<script lang="ts">
import { debounce } from "lodash";
import { store } from "../store";

const key = "AIzaSyAHH54fHc_pHW7mniQLkXm6M88qttqHGAw";
const cx = "002242183718350285905:q8tgyhef4yc";

export default {
  methods: {
    change: debounce(async (event: KeyboardEvent) => {
      const value = (<HTMLInputElement>event.target).value;
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&searchType=image&q=${value}`
      );
      const body = await response.json();

      const images = !body.items
        ? []
        : body.items.map((x: any) => ({
            url: x.link,
            text: x.title
          }));
      store.dispatch("updateImages", { images });
    }, 500),
    itemClick(index) {
      store.dispatch("selectImage", { index });
    },
    keyUp(e: KeyboardEvent) {
      if (e.which === 38) {
        store.dispatch("selectImageUp");
      } else if (e.which === 40) {
        store.dispatch("selectImageDown");
      }
    }
  },
  computed: {
    items() {
      return store.state.images;
    },
    selectedIndex() {
      return store.state.selectedImageIndex;
    }
  }
};
</script>

