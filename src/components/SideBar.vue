<template>
  <aside aria-label="Sidebar">
    <div class="sidebar-logo">
      <img class="logo-img" src="@/assets/images/logo.png" alt="Unimacy logo" />
      <div class="logo-content">
        <h3>Unimacy</h3>
        <small>Gestão</small>
      </div>
    </div>
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item">
        <font-awesome-icon
          class="sidebar-menu-item-icon"
          size="lg"
          icon="fa-solid fa-cash-register"
        />Venda
      </li>
      <li class="sidebar-menu-item">
        <font-awesome-icon
          class="sidebar-menu-item-icon"
          size="lg"
          icon="fa-solid fa-box"
        />
        Produtos
      </li>
      <li class="sidebar-menu-item">
        <font-awesome-icon
          class="sidebar-menu-item-icon"
          size="lg"
          icon="fa-solid fa-users"
        />
        Clientes
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  setup() {
    return {};
  }
});
</script>

<style scoped>
aside {
  @apply bg-grey-800 w-56 h-screen shadow-2xl;
}

.sidebar-logo {
  @apply flex items-center justify-center pt-5;
}
.logo-content {
  @apply flex flex-col items-center relative mr-6;
}

.logo-img {
  @apply w-12;
}

.logo-content h3 {
  @apply font-bold;
}
.logo-content small {
  @apply relative bottom-1;
}

.sidebar-menu {
  @apply mt-6 space-y-2;
}

.sidebar-menu li {
  @apply hover:rounded hover:cursor-pointer hover:bg-grey-600 mx-3 p-1;
}

.sidebar-menu-item > {
  @apply mr-3;
}

.sidebar-menu-item-icon {
  @apply mr-2 relative left-1;
}
</style>
