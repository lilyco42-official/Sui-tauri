import { createRouter, createWebHashHistory } from "vue-router";
// 不再需要导入 Dashboard 等旧视图

const routes = [
  {
    path: "/",
    name: "Chat",
    component: () => import("../views/ChatView.vue"), // 新建聊天主视图
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/SettingsView.vue"), // 新建设置视图
  },
  // 可以添加其他路由，如关于页面等
];

const router = createRouter({
  history: createWebHashHistory(), // Tauri 中推荐 hash 模式
  routes,
});

export default router;
