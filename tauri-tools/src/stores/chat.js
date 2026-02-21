import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore("chat", () => {
  const chats = ref([]); // 会话列表
  const currentChatId = ref(null);

  function createChat() {
    const id = Date.now().toString();
    chats.value.push({
      id,
      title: "新会话",
      messages: [],
      createdAt: new Date(),
    });
    currentChatId.value = id;
  }

  function setCurrentChat(id) {
    currentChatId.value = id;
  }

  function deleteChat(id) {
    chats.value = chats.value.filter((c) => c.id !== id);
    if (currentChatId.value === id) {
      currentChatId.value = chats.value[0]?.id || null;
    }
  }

  function addMessage(chatId, message) {
    const chat = chats.value.find((c) => c.id === chatId);
    if (chat) {
      chat.messages.push(message);
      // 根据第一条用户消息自动命名会话
      if (chat.messages.length === 1 && message.role === "user") {
        chat.title =
          message.content.slice(0, 20) +
          (message.content.length > 20 ? "..." : "");
      }
    }
  }

  return {
    chats,
    currentChatId,
    createChat,
    setCurrentChat,
    deleteChat,
    addMessage,
  };
});
