import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit.js";

// 글로벌 믹스인 추가
import { globalMixin } from "./mixins/popupMixin/globalMixin.js";

const app = createApp(App);

// 글로벌 믹스인 사용
app.mixin(globalMixin);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
