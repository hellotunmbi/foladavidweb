import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/style.css";
import "animate.css";

createApp(App).use(router).mount("#app");
