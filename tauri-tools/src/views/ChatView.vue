<template>
    <div class="h-full flex flex-col bg-base-100">
        <!-- 消息列表 -->
        <div
            ref="messagesContainer"
            class="flex-1 overflow-y-auto p-4 space-y-4"
        >
            <div
                v-for="(msg, index) in currentChat.messages"
                :key="index"
                class="chat"
                :class="msg.role === 'user' ? 'chat-end' : 'chat-start'"
            >
                <div
                    class="chat-bubble"
                    :class="
                        msg.role === 'user'
                            ? 'chat-bubble-primary'
                            : 'chat-bubble-secondary'
                    "
                >
                    <div v-html="renderMarkdown(msg.content)"></div>
                </div>
            </div>
            <!-- 加载指示器 -->
            <div v-if="isLoading" class="chat chat-start">
                <div class="chat-bubble chat-bubble-ghost">
                    <span class="loading loading-dots loading-sm"></span>
                </div>
            </div>
        </div>

        <!-- 输入区域 -->
        <div class="border-t border-base-300 p-4">
            <form @submit.prevent="sendMessage" class="flex gap-2">
                <input
                    v-model="inputMessage"
                    type="text"
                    placeholder="输入消息... (Ctrl+Enter 发送)"
                    class="input input-bordered flex-1"
                    :disabled="isLoading"
                />
                <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="!inputMessage.trim() || isLoading"
                >
                    发送
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from "vue";
import { useChatStore } from "../stores/chat"; // 新建 store
import { marked } from "marked"; // 安装 marked 用于渲染 Markdown
import { invoke } from "@tauri-apps/api/core";
const chatStore = useChatStore();
const messagesContainer = ref(null);
const inputMessage = ref("");
const isLoading = ref(false);

const currentChat = computed(() => {
    return (
        chatStore.chats.find((c) => c.id === chatStore.currentChatId) || {
            messages: [],
        }
    );
});

// 自动滚动到底部
watch(
    () => currentChat.value.messages,
    async () => {
        await nextTick();
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop =
                messagesContainer.value.scrollHeight;
        }
    },
    { deep: true },
);

function renderMarkdown(text) {
    return marked(text);
}

async function sendMessage() {
    if (!inputMessage.value.trim() || !chatStore.currentChatId) return;

    const userMessage = { role: "user", content: inputMessage.value };
    chatStore.addMessage(chatStore.currentChatId, userMessage);
    inputMessage.value = "";

    isLoading.value = true;
    try {
        // 调用 Tauri 后端命令 'generate'
        const response = await invoke("generate", {
            prompt: userMessage.content,
            history: currentChat.value.messages.slice(0, -1),
        });
        const assistantMessage = { role: "assistant", content: response };
        chatStore.addMessage(chatStore.currentChatId, assistantMessage);
    } catch (err) {
        console.error("推理失败", err);
        chatStore.addMessage(chatStore.currentChatId, {
            role: "assistant",
            content: "抱歉，发生了错误。",
        });
    } finally {
        isLoading.value = false;
    }
}
</script>
