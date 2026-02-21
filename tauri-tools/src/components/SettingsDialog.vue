<script setup>
import { ref } from 'vue';
import { useAppStore } from '../stores/app';

const store = useAppStore();
const emit = defineEmits(['close']);

const localSettings = ref({
  ...store.userSettings
});

const saveSettings = () => {
  store.updateUserSettings(localSettings.value);
  emit('close');
};

// 动画状态
const isVisible = ref(false);
setTimeout(() => {
  isVisible.value = true;
}, 50);

const closeDialog = () => {
  isVisible.value = false;
  setTimeout(() => {
    emit('close');
  }, 200);
};
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-y-auto"
       :class="{ 'dialog-overlay-enter': !isVisible, 'dialog-overlay-enter-active': isVisible }">
    <div class="fixed inset-0 bg-black transition-opacity duration-300 ease-out"
         :class="{ 'bg-opacity-0': !isVisible, 'bg-opacity-30': isVisible }"
         @click="closeDialog"></div>
    
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-out"
           :class="{ 'opacity-0 scale-95': !isVisible, 'opacity-100 scale-100': isVisible }">
        <!-- 对话框头部 -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-base-200">
          <h3 class="text-lg font-semibold tracking-tight">系统设置</h3>
          <button class="btn btn-ghost btn-sm btn-circle" @click="closeDialog">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- 对话框内容 -->
        <div class="px-6 py-4 space-y-6">
          <!-- 语言设置 -->
          <div class="space-y-2">
            <label class="text-sm font-medium">系统语言</label>
            <select class="select select-bordered w-full bg-base-200 border-0 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    v-model="localSettings.language">
              <option value="zh-CN">简体中文</option>
              <option value="en-US">English</option>
            </select>
          </div>

          <!-- 主题设置 -->
          <div class="space-y-2">
            <label class="text-sm font-medium">主题模式</label>
            <div class="bg-base-200 p-1 rounded-xl flex gap-1">
              <button 
                class="flex-1 btn btn-sm border-0 rounded-lg transition-all duration-200"
                :class="[
                  store.theme === 'light' 
                    ? 'bg-base-100 shadow-sm text-base-content' 
                    : 'bg-transparent text-base-content/60 hover:bg-base-100/50'
                ]"
                @click="store.theme = 'light'"
              >
                浅色
              </button>
              <button 
                class="flex-1 btn btn-sm border-0 rounded-lg transition-all duration-200"
                :class="[
                  store.theme === 'dark' 
                    ? 'bg-base-100 shadow-sm text-base-content' 
                    : 'bg-transparent text-base-content/60 hover:bg-base-100/50'
                ]"
                @click="store.theme = 'dark'"
              >
                深色
              </button>
            </div>
          </div>

          <!-- 通知设置 -->
          <div class="flex items-center justify-between py-2">
            <div class="space-y-1">
              <div class="text-sm font-medium">启用通知</div>
              <div class="text-xs text-base-content/60">接收重要的系统通知和更新提醒</div>
            </div>
            <input type="checkbox" class="toggle toggle-primary" v-model="localSettings.notifications" />
          </div>

          <!-- 紧凑模式 -->
          <div class="flex items-center justify-between py-2">
            <div class="space-y-1">
              <div class="text-sm font-medium">紧凑模式</div>
              <div class="text-xs text-base-content/60">减小界面元素间距，显示更多内容</div>
            </div>
            <input type="checkbox" class="toggle toggle-primary" v-model="localSettings.compactMode" />
          </div>
        </div>

        <!-- 对话框底部 -->
        <div class="flex justify-end gap-3 px-6 py-4 border-t border-base-200">
          <button class="btn btn-ghost min-w-[5rem]" @click="closeDialog">取消</button>
          <button class="btn btn-primary min-w-[5rem]" @click="saveSettings">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay-enter {
  opacity: 0;
}

.dialog-overlay-enter-active {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

/* 自定义按钮样式 */
.btn {
  @apply font-normal;
  text-transform: none;
}

.btn-primary {
  @apply shadow-sm;
}

/* 自定义 toggle 开关样式 */
.toggle {
  @apply bg-base-300;
  --tglbg: var(--b3);
}

.toggle:checked {
  @apply border-primary/80;
  --tglbg: var(--p);
}

/* 自定义 select 样式 */
.select {
  @apply text-sm font-normal;
  text-transform: none;
}

.select:focus {
  @apply outline-none;
}
</style> 