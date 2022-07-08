<template>
  <div>
    <SideBar />
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
