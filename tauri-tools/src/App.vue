<script setup>
import { useAppStore } from './stores/app'
import Navbar from './layout/Navbar.vue'
import Sidebar from './layout/Sidebar.vue'

const store = useAppStore()
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden bg-base-100">
    <!-- 顶部导航栏 -->
    <Navbar @toggle-sidebar="store.toggleSidebar" class="flex-none" />
    
    <!-- 主要内容区域 -->
    <div class="flex-1 flex overflow-hidden relative">
      <!-- 侧边栏 -->
      <Sidebar :is-open="store.isSidebarOpen" class="absolute inset-y-0 left-0 z-20" />
      
      <!-- 内容区域 -->
      <main class="flex-1 overflow-auto w-full transition-all duration-300"
            :style="{ paddingLeft: store.isSidebarOpen ? '14rem' : '0' }">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

/* 移除默认的滚动条样式 */
::-webkit-scrollbar {
  @apply w-1.5;
}

::-webkit-scrollbar-track {
  @apply bg-base-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-base-300 rounded-full transition-colors duration-200;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral;
}

.prose {
  max-width: none;
}

.prose h1 {
  margin-bottom: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
