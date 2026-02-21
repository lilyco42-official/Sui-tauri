<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">设置</h1>
        <div class="space-y-4">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">暗色模式</span>
                    <input
                        type="checkbox"
                        class="toggle"
                        v-model="store.theme"
                        true-value="dark"
                        false-value="light"
                        @change="store.toggleTheme"
                    />
                </label>
            </div>
            <!-- 后续可添加模型路径、参数等 -->
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "../stores/app";
const store = useAppStore();
</script>
