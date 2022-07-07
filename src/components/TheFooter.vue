<template>
  <footer class="w-full bg-grey p-2">
    <p class="text-center">
      Desenvolvido por
      <a href="https://www.github.com/luan-coelho" target="_blank"
        >Luan Coêlho
        <font-awesome-icon class="ml-1" icon="fa-brands fa-github-square fa-5x"
      /></a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
