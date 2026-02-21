<template>
    <div class="navbar bg-base-100 shadow-lg">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">本地AI聊天</a>
        </div>
        <div class="flex-none gap-2">
            <button class="btn btn-ghost btn-circle" @click="store.toggleTheme">
                <MoonIcon v-if="store.theme === 'light'" class="h-5 w-5" />
                <SunIcon v-else class="h-5 w-5" />
            </button>
            <button
                class="btn btn-ghost btn-circle"
                @click="$router.push('/settings')"
            >
                <Cog6ToothIcon class="h-5 w-5" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "../stores/app";
import { MoonIcon, SunIcon, Cog6ToothIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const store = useAppStore();
const router = useRouter();
</script>
