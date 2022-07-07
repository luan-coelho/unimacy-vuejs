<template>
  <div class="flex flex-row">
    <SideBar class="basis-1/6" />
    <FormProduto class="basis-5/6" />
  </div>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';
import FormProduto from '@/components/FormProduto.vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    SideBar,
    FormProduto,
    TheFooter
  }
});
</script>

<style scoped></style>
