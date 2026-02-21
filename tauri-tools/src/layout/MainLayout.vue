<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <!-- 导航栏 -->
    <Navbar @toggle-sidebar="toggleSidebar" class="fixed top-0 left-0 right-0 z-50" />

    <!-- 侧边栏 -->
    <Sidebar :is-open="isSidebarOpen" class="z-40" />

    <!-- 主内容区 -->
    <main class="pt-16 transition-all duration-300 ease-in-out" :class="{ 'lg:ml-56': isSidebarOpen }">
      <div class="p-6">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style> 