import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 侧边栏状态
  const isSidebarOpen = ref(true)
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  // 主题设置
  const theme = ref(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  }

  // 初始化主题
  const initTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  // 用户设置
  const userSettings = ref({
    language: 'zh-CN',
    notifications: true,
    compactMode: false
  })

  const updateUserSettings = (settings) => {
    userSettings.value = { ...userSettings.value, ...settings }
  }

  return {
    // 侧边栏
    isSidebarOpen,
    toggleSidebar,
    
    // 主题
    theme,
    toggleTheme,
    initTheme,
    
    // 用户设置
    userSettings,
    updateUserSettings
  }
}) 