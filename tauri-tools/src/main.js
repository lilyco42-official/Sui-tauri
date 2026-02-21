import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// import "./styles.css"; // 如果存在的话
import "./index.css"; // 用于Tailwind CSS

// 从 localStorage 获取主题并立即应用
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
