<template>
    <aside
        class="w-56 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out bg-base-200"
        :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    >
        <!-- 新建会话按钮 -->
        <div class="p-2 border-b border-base-300">
            <button
                class="btn btn-primary btn-sm w-full"
                @click="createNewChat"
            >
                + 新建会话
            </button>
        </div>

        <!-- 会话列表 -->
        <div class="flex-1 overflow-y-auto">
            <ul class="menu menu-sm px-2">
                <li v-for="chat in chatStore.chats" :key="chat.id">
                    <a
                        href="#"
                        class="flex items-center gap-2"
                        :class="{ active: chatStore.currentChatId === chat.id }"
                        @click.prevent="switchChat(chat.id)"
                    >
                        <ChatBubbleLeftIcon class="h-4 w-4" />
                        <span class="flex-1 truncate">{{ chat.title }}</span>
                        <button
                            class="btn btn-ghost btn-xs"
                            @click.stop="deleteChat(chat.id)"
                        >
                            ✕
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { useChatStore } from "../stores/chat";
import { ChatBubbleLeftIcon } from "@heroicons/vue/24/outline";

const chatStore = useChatStore();
defineProps({ isOpen: Boolean });

const createNewChat = () => {
    chatStore.createChat();
};

const switchChat = (id) => {
    chatStore.setCurrentChat(id);
};

const deleteChat = (id) => {
    chatStore.deleteChat(id);
};
</script>
