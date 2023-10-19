import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// import router from "./router";
// .use(router)

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
